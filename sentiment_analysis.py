from transformers import pipeline

# Load the sentiment analysis pipeline
sentiment_analysis_pipeline = pipeline("sentiment-analysis")

# Sample text for sentiment analysis
text_to_analyze = "I love this movie and i would watch it again and again!"

# Perform sentiment analysis
result = sentiment_analysis_pipeline(text_to_analyze)

# Print the result
print()
print("The text was :")
print(text_to_analyze)
print("Its evaluation is")
print(" Sentiment:", result[0]['label'])
print(" Confidence:", result[0]['score'])
print()
