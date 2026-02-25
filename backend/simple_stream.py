import time
import csv
import json
import os

# This script replaces 'stream.py' for Windows users.
# It watches 'centers.csv' and updates 'active_centers.jsonl' every second.

INPUT_FILE = "centers.csv"
OUTPUT_FILE = "active_centers.jsonl"

print("🚀 Windows Stream is running... Watching centers.csv for changes.")

while True:
    try:
        active_centers = []
        
        if os.path.exists(INPUT_FILE):
            with open(INPUT_FILE, "r") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    # LOGIC: Only keep "Active" centers that are not full (capacity < 100)
                    # We also handle the case where capacity might be a string
                    try:
                        capacity = int(row.get("current_capacity_percentage", 0))
                    except ValueError:
                        capacity = 0

                    if row.get("status") == "Active" and capacity < 100:
                        active_centers.append(row)
        
        # Write the filtered list to the file your API reads
        with open(OUTPUT_FILE, "w") as f:
            for center in active_centers:
                f.write(json.dumps(center) + "\n")
                
        # Wait 1 second before checking again
        time.sleep(1)
        
    except Exception as e:
        print(f"⚠️ Error: {e}")
        time.sleep(1)