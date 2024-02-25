# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # #                   Imports                         # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
import re
from nltk.corpus import stopwords
from keras.preprocessing.text import tokenizer_from_json
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
import json


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

with open('tokenizer.json') as f:
    data = json.load(f)
    loaded_tokenizer = tokenizer_from_json(data)

model_path ='LSTM_model.keras'
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
