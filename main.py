# Read to Understand code better!
# keyword is the terminology and news is filtered with reference to this keyword.
# content finds all the news like everything available on the news portal
# printed_content stores all the content that has been printed 
# filtered_content is the content that contains keyword
# i is the iterative news like every news one by one

import requests
from bs4 import BeautifulSoup
import time

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
        # Here, .strip() is used to make comparision without taking whitespace in account
        # And, .lower() is used to make all the content to lower case so the comparision is case-insensitive

        if(keyword.lower() in filtered_content) and (filtered_content not in printed_content):
            print()
            print(i.h2.a.string) 
            printed_content.add(filtered_content)  
            new_news = True
        
    if new_news: 
        print('''\nNo more NEWS for now.\nWill inform whenever something new comes up!\n''')
            
    time.sleep(300)
    # The time 300 is in seconds so it checks after every 5 minutes. 