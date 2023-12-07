# Read to Understand code better!

# Dependeency:
pandas for data storing, lxml, beautifulsoup4 and requests for web srcapping
```bash
pip install pandas
pip install beautifulsoup4
pip install lxml
pip install requests
```


# keyword is the terminology and news is filtered with reference to this keyword.

# fetch_content finds all the news like everything available on the news portal

# latest_content fetches the most recent news from the news portal

# printed_content stores all the content that has been printed 

# filtered_content is the content that contains keyword

# i is the iterative news like every news one by one

# The, .strip() is used to make comparision without taking whitespace in account
# And, .lower() is used to make all the content to lower case so the comparision is case-insensitive
# Finally, .string is used to get the text content inside the tag

## The time given is in seconds so it checks after continuosly following a delay. 
