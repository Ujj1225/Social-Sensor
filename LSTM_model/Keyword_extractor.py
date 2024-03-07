import sys
import pandas as pd

def count_occ(key_words, post_string):
    count = 0
    for keyword in key_words:
        count += post_string.lower().count(keyword.lower())
    return count


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("No keyword provided!")

    keywords = []
    for i in range(1, len(sys.argv)):
        keywords.append(sys.argv[i])

    # print(keywords)

    existing_file_path = "../LSTM_model/okh_dataset.json"
    new_file_path = "filtered_data.json"


    try:
        # if the file exists then read it
        df_existing = pd.read_json(existing_file_path)
    except FileNotFoundError:
        print("No file found")
        exit()

    new_dataframe = pd.DataFrame()
    for i in range(len(df_existing)):
        occurance = count_occ(keywords, df_existing["Post_content"][i])
        if occurance > 1:

            new_data = {
                "Link": df_existing["Link"][i],
                "Title": df_existing["Title"][i],
                "Author": df_existing["Author"][i],
                "Date": df_existing["Date"][i],
                "Sentiment": df_existing["Sentiment"][i],
                "Occuracne": [occurance],

            }
            df_new = pd.DataFrame(new_data)
            new_dataframe = new_dataframe._append(df_new, ignore_index=True)
    new_dataframe.to_json(new_file_path, index=False)

    exit()


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #