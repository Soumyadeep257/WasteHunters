import pathway as pw

# 1. Define the Input Source
# We simulate a live data stream by watching a CSV file. 
# Whenever you save changes to 'centers.csv', this pipeline updates automatically.
input_data = pw.io.csv.read(
    "./centers.csv",
    schema=pw.schema_from_csv("./centers.csv"),
    mode="streaming"
)

# 2. Process the Data (The "Pathway" Logic)
# Let's filter to keep only centers that are currently "Active"
# and have capacity less than 100% (not full).
active_centers = input_data.filter(
    (pw.this.status == "Active") & 
    (pw.this.current_capacity_percentage < 100)
)

# 3. Output to JSONLines
# This writes the processed data to the file your API reads.
pw.io.jsonlines.write(
    active_centers,
    "active_centers.jsonl"
)

# 4. Run the Pipeline
if __name__ == "__main__":
    print("🚀 Pathway Stream is running... Waiting for data in centers.csv")
    pw.run()