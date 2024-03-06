from bs4 import BeautifulSoup
from nltk.corpus import stopwords
from keras.preprocessing.text import tokenizer_from_json
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
import pandas as pd
import requests
import json
import re

# Run Once if the stopwards are not downloaded
import nltk
nltk.download('stopwords')

# # # Function to clean text # # #
def preprocess_text(text):
    # Lowercase all the strings
    sentence = text.lower()

    # Remove html tags
    sentence = re.compile(r'<[^>]+>').sub('', sentence)

    # Remove punctuations and numbers
    sentence = re.sub('[^a-zA-Z]', ' ', sentence)

    # Single character removal
    sentence = re.sub(r"\s+[a-zA-Z]\s+", ' ', sentence)

    # Remove multiple spaces
    sentence = re.sub(r'\s+', ' ', sentence)

    # Remove Stopwords
    pattern = re.compile(r'\b(' + r'|'.join(stopwords.words('english')) + r')\b\s*')
    sentence = pattern.sub('', sentence)

    return sentence

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #             Load Model and Tokenizer              # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

Max_length = 100

with open('LSTM_model/tokenizer.json') as f:
    data = json.load(f)
    loaded_tokenizer = tokenizer_from_json(data)

model_path ='LSTM_model/LSTM_model.keras'
pretrained_lstm_model = load_model(model_path)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #           Function to analysis the text           # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

def get_sentiment_of_text(text):
    unseen_reviews = [text]

    unseen_processed = []
    for reviews in unseen_reviews:
      review = preprocess_text(reviews)
      unseen_processed.append(review)

    unseen_tokenized = loaded_tokenizer.texts_to_sequences(unseen_processed)

# Pooling instance to have maxlength of 100 tokens
    unseen_padded = pad_sequences(unseen_tokenized, padding='post', maxlen=Max_length)

    res = pretrained_lstm_model.predict(unseen_padded)
    return res[0][0]

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Web Scrapper                    # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

if __name__ == '__main__':
    existing_file_path = 'LSTM_model/okh_dataset.json'
    post_urls = set()
    # "https://english.onlinekhabar.com"
    # "https://english.onlinekhabar.com/category/political"
    # "https://english.onlinekhabar.com/category/economy"
    urls = ["https://english.onlinekhabar.com",
            "https://english.onlinekhabar.com/category/political",
            "https://english.onlinekhabar.com/category/economy"]
    for i in "234":
        urls.append("https://english.onlinekhabar.com/category/political/page/"+i)
        urls.append("https://english.onlinekhabar.com/category/economy/page/"+i)

    try:
        # if the file exists then read it
        df_existing = pd.read_json(existing_file_path)
        existing_links = set(df_existing['Link'])
    except FileNotFoundError:
        # Create a new DataFrame if the file doesn't exist
        df_existing = pd.DataFrame()
        existing_links = set()


    for url in urls:
        print("looking in: ", url)
        result = requests.get(url)
        soup = BeautifulSoup(result.text, "lxml")
        filtered_news = soup.find_all("div", class_="ok-post-contents")

        for news in filtered_news:
            post_urls.add(news.h2.a.get('href'))

    print("pages to search: ", len(post_urls))
    url_index = 1
    for link in post_urls:
        print(url_index, ':', link)
        url_index = url_index + 1
        if link not in existing_links:
            html_result = requests.get(link)
            link_soup = BeautifulSoup(html_result.text, "lxml")
            link_title = link_soup.find_all("div", class_="ok-post-header")
            post_details = link_title[0].find_all("span")
            links_contains = link_soup.find_all("div", class_="post-content-wrap")
            new_data = {
                "Link": [link],
                "Title": [link_title[0].h1.text],
                "Author": [post_details[0].text],
                "Date": [post_details[1].text],
                "Post_content": links_contains[0].text,
                "Sentiment": get_sentiment_of_text(links_contains[0].text)
            }
            df_new = pd.DataFrame(new_data)
            df_existing = df_existing._append(df_new, ignore_index=True)

    df_existing.to_json(existing_file_path, index=False)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
