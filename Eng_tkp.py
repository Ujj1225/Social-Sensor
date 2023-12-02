import requests
from bs4 import BeautifulSoup
import time

def fetch_content(): 
    url = "https://kathmandupost.com"
    result = requests.get(url)
    soup = BeautifulSoup(result.text, "lxml")
    return soup.find_all("a")

printed_content = set()

print("Enter keyword to search for: ", end='')
keyword = input()

while True: 

    latest_content = fetch_content()
    new_news = False

    for i in latest_content:
        if i.string is not None:
            filtered_content = i.string.strip().lower()

        if(keyword.lower() in filtered_content) and (filtered_content not in printed_content):
            print()
            print(i.string) 
            printed_content.add(filtered_content)  
            new_news = True
        
    if new_news: 
        print('''\nNo more NEWS for now.\nWill inform whenever something new comes up!\n''')
            
    time.sleep(300)