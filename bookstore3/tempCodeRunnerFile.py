import pandas as pd
import numpy as np

df = pd.read_csv("D:\\My Documents\\github\\bookstore-next-js\\bookstore3\\test.csv")

# filter out all entries that don't contain data on Chelsea
df_yellow = df.loc[(df["HomeTeam"]=="Chelsea") | (df["AwayTeam"]=="Chelsea")]

# create a column that will contain all yellow cards given to Chelsea
df_yellow["YellowCards"] = np.where(df_yellow['HomeTeam'] == "Chelsea", df["HomeYellow"], df["AwayYellow"])

# Sum YellowCards grouping by Seasons
df_yellow_tallied = df_yellow.groupby("Season")["YellowCards"].sum()
print(df_yellow_tallied)