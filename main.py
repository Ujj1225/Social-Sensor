import requests
from bs4 import BeautifulSoup
url = "https://english.onlinekhabar.com/"
result = requests.get(url)
soup = BeautifulSoup(result.text, "lxml")
# tag = soup.div.h2.a.string
content = soup.find_all("div", class_ = "ok-post-contents")

for i in content:
    keyword = 'Ram Chandra Poudel'
    if(keyword in i.h2.a.string):
        print(i.h2.a.string)