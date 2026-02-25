import pathway as pw

class RecyclingCenter(pw.Schema):
    center_id: int
    name: str
    location: str
    current_capacity_kg: float
    is_active: bool

# Read live data
centers_table = pw.io.csv.read("./data", schema=RecyclingCenter, mode="streaming")

# Filter live data
active_centers = centers_table.filter(
    (centers_table.is_active == True) & (centers_table.current_capacity_kg < 2000.0)
)

# OUTPUT AS JSONL (Perfect for our API)
pw.io.jsonlines.write(active_centers, "active_centers.jsonl")

if __name__ == "__main__":
    print("Starting WasteHunters Pathway Engine... Press Ctrl+C to stop.")
    pw.run()