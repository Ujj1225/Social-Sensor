import requests
from bs4 import BeautifulSoup
import time
import os
from dotenv import load_dotenv

load_dotenv()

def fetch_content(): 
    url = "https://english.onlinekhabar.com/"
    result = requests.get(url)
    soup = BeautifulSoup(result.text, "lxml")
    return soup.find_all("div", class_ = "ok-post-contents")

printed_content = set()

print("Enter keyword to search for: ", end='')
keyword = input()

while True: 

    latest_content = fetch_content()
    new_news = False

    for i in latest_content:
        filtered_content = i.h2.a.string.strip().lower()

        if(keyword.lower() in filtered_content) and (filtered_content not in printed_content):
            print()
            print(i.h2.a.string) 
            printed_content.add(filtered_content)  
            new_news = True
        
    if new_news: 
        print('''\nNo more NEWS for now.\nWill inform whenever something new comes up!\n''')
            
    time.sleep(os.getenv("DELAY"))