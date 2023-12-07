from bs4 import BeautifulSoup
import pandas as pd
import requests

existing_file_path = 'okh_dataset.csv'
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
    df_existing = pd.read_csv(existing_file_path)
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
            "Post_content": links_contains[0].text
        }
        df_new = pd.DataFrame(new_data)
        df_existing = df_existing._append(df_new, ignore_index=True)

df_existing.to_csv(existing_file_path, index=False)
