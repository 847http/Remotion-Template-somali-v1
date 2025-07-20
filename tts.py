import os
import sys
import asyncio
import random
import shutil
import subprocess

# === AUTO-INSTALL edge-tts ===
try:
    import edge_tts
except ImportError:
    print("📦 Installing edge-tts...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts"])
    import edge_tts

# === CONFIG ===
VIDEO_WORDS = {
    "video1": {
        "en": ["Apple", "Banana", "Grape", "Mango", "Peach", "Lemon", "Orange", "Cherry", "Papaya", "Pear"],
        "so": ["Tufaax", "Moos", "Canab", "Cambe", "Dabacashe", "Liin", "Liin Dhanaan", "Qare", "Babaya", "Beer"]
    },
    "video2": {
        "en": ["Car", "Bus", "Train", "Bicycle", "Truck", "Motorcycle", "Boat", "Helicopter", "Plane", "Submarine"],
        "so": ["Gaari", "Baskii", "Tareen", "Baaskiil", "Xamuul", "Mooto", "Doon", "Helikobtar", "Diyaarad", "Gujis"]
    },
    "video3": {
        "en": ["Dog", "Cat", "Cow", "Sheep", "Goat", "Camel", "Horse", "Elephant", "Lion", "Tiger"],
        "so": ["Ey", "Bisad", "Sac", "Ido", "Riyo", "Geel", "Faras", "Maroodi", "Libaax", "Shabeel"]
    },
    "video4": {
        "en": ["Chair", "Table", "Door", "Window", "Bed", "Spoon", "Plate", "Cup", "Mirror", "Clock"],
        "so": ["Kursi", "Miis", "Albaab", "Daaqad", "Sariir", "Fargeeto", "Saxan", "Koob", "Muraayad", "Saacad"]
    },
    "video5": {
        "en": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Orange", "Brown", "Pink"],
        "so": ["Casaan", "Buluug", "Cagaar", "Jaalle", "Madow", "Caddaan", "Buni", "Oranji", "Buunni", "Rosan"]
    },
    "video6": {
        "en": ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
        "so": ["Kow", "Labo", "Saddex", "Afar", "Shan", "Lix", "Toddoba", "Sideed", "Sagaal", "Toban"]
    },
    "video7": {
        "en": ["Hot", "Cold", "Happy", "Sad", "Fast", "Slow", "Big", "Small", "Tall", "Short"],
        "so": ["Kulayl", "Qabow", "Faraxsan", "Murugo", "Degdeg", "Gaabis", "Weyn", "Yar", "Dheer", "Gaaban"]
    },
    "video8": {
        "en": ["Book", "Pen", "Pencil", "Paper", "Notebook", "Bag", "School", "Teacher", "Student", "Classroom"],
        "so": ["Buug", "Qalin", "Maqas", "Warqad", "Buugga Qoraalka", "Bac", "Iskuul", "Macallin", "Arday", "Fasalka"]
    },
    "video9": {
        "en": ["Father", "Mother", "Brother", "Sister", "Uncle", "Aunt", "Grandfather", "Grandmother", "Cousin", "Baby"],
        "so": ["Aabbe", "Hooyo", "Walaal", "Walaasha", "Adeer", "Eedo", "Awoowe", "Ayeeyo", "Abti Dumar", "Ilmo"]
    },
    "video10": {
        "en": ["City", "Village", "House", "Building", "Road", "Bridge", "Tower", "Farm", "Market", "Mosque"],
        "so": ["Magaalo", "Tuulo", "Guri", "Dhismaha", "Waddo", "Buundo", "Munaarad", "Beero", "Suuq", "Masaajid"]
    }
}

EFFECTS_OPTIONS = {
    "option1": {
        "intro": "Let's try your skills in Somali!",
        "pause1": "Hit the like button if you made it this far!",
        "pause2": "You're doing amazing. Keep going!",
        "end": "Well done! See you in the next quiz!"
    },
    "option2": {
        "intro": "Ready for a Somali challenge?",
        "pause1": "If you're enjoying, give this a thumbs up!",
        "pause2": "Almost there! Just a few more...",
        "end": "That’s all for today. Great job!"
    },
    "option3": {
        "intro": "Let's learn some Somali words!",
        "pause1": "Still with us? Smash that like!",
        "pause2": "You’re doing great. Stay focused!",
        "end": "Awesome work! Catch you next time."
    },
    "option4": {
        "intro": "Test your Somali vocabulary!",
        "pause1": "This quiz is fun, right?",
        "pause2": "Keep it up, just a bit more!",
        "end": "You did amazing. Until next time!"
    },
    "option5": {
        "intro": "Can you guess these Somali words?",
        "pause1": "You're halfway there. Stay sharp!",
        "pause2": "Only a few left. Keep going!",
        "end": "Fantastic job! See you in the next one!"
    },
    "option6": {
        "intro": "Sharpen your Somali skills now!",
        "pause1": "Good job! Don't give up!",
        "pause2": "You’ve almost finished!",
        "end": "Excellent! Let’s do another soon."
    }
}


MALE_EN = "en-US-GuyNeural"
MALE_SO = "so-SO-MuuseNeural"

VOICE_PATH = "my-video/public/sounds/voices"
EFFECTS_PATH = "my-video/public/sounds/effects"
WORDS_TS_PATH = "my-video/src/data/words.ts"
PROJECT_PATH = r"C:\Users\ahmed\Desktop\Remotion Automation\my-video"

# === HELPERS ===
def validate_input(arg):
    if arg == "all":
        return list(VIDEO_WORDS.keys())
    elif arg in VIDEO_WORDS:
        return [arg]
    else:
        print(f"❌ Unknown video '{arg}'. Available:", ", ".join(VIDEO_WORDS.keys()))
        sys.exit(1)

def clean_directory(path):
    if os.path.exists(path):
        shutil.rmtree(path)
    os.makedirs(path)

async def generate_tts(text, voice, filepath):
    temp_path = filepath.replace(".mp3", "_temp.mp3")

    # Step 1: Generate full mp3 to temp path
    communicate = edge_tts.Communicate(text=text, voice=voice)
    await communicate.save(temp_path)

    # Step 2: Get duration in seconds
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of",
         "default=noprint_wrappers=1:nokey=1", temp_path],
        capture_output=True, text=True
    )
    try:
        duration = float(result.stdout.strip())
    except ValueError:
        print(f"⚠️ Could not get duration for {temp_path}")
        shutil.move(temp_path, filepath)
        return

    # Step 3: Subtract 0.6 seconds (600ms)
    new_duration = max(0, duration - 0.6)

    # Step 4: Trim with ffmpeg
    subprocess.run([
        "ffmpeg", "-y", "-i", temp_path, "-t", str(new_duration), "-c", "copy", filepath
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    os.remove(temp_path)

def write_words_ts(somali_words):
    content = f'export const textContent = {str(somali_words)};'
    with open(WORDS_TS_PATH, "w", encoding="utf-8") as f:
        f.write(content)

def ensure_node_modules_installed():
    node_modules_path = os.path.join(PROJECT_PATH, "node_modules")
    if not os.path.exists(node_modules_path):
        print("📦 Installing node dependencies...")
        subprocess.run(["npm", "install"], cwd=PROJECT_PATH, shell=True)

def pick_effects():
    return random.choice(list(EFFECTS_OPTIONS.values()))

# === MAIN WORKFLOW ===
async def process_video(video_key):
    print(f"\n🎬 Processing {video_key}...")

    en_words = VIDEO_WORDS[video_key]["en"]
    so_words = VIDEO_WORDS[video_key]["so"]

    clean_directory(VOICE_PATH)
    clean_directory(EFFECTS_PATH)

    # Generate voice files
    for i, (en, so) in enumerate(zip(en_words, so_words), 1):
        en_path = os.path.join(VOICE_PATH, f"voice{i}_en.mp3")
        so_path = os.path.join(VOICE_PATH, f"voice{i}_so.mp3")
        await generate_tts(f"How do you say {en} in Somali?", MALE_EN, en_path)
        await generate_tts(so, MALE_SO, so_path)

    # Generate effect files from text
    chosen_effects = pick_effects()
    print(f"🎵 Selected Effects:\n" + "\n".join([f"{k}: {v}" for k, v in chosen_effects.items()]))
    for effect_name, effect_text in chosen_effects.items():
        effect_path = os.path.join(EFFECTS_PATH, f"{effect_name}.mp3")
        await generate_tts(effect_text, MALE_EN, effect_path)

    # Update words.ts
    write_words_ts(so_words)

    # Ensure dependencies
    ensure_node_modules_installed()

    # Run audio-durations.ts
    print("⚙️ Generating audio durations...")
    subprocess.run(["npx", "ts-node", "audio-durations.ts"], cwd=os.path.join(PROJECT_PATH, "src", "data"), shell=True)

    # === Pick a random background video ===
    output_folder = os.path.join(os.getcwd(), "output")
    public_video_folder = os.path.join(PROJECT_PATH, "public", "videos")

    video_files = [f for f in os.listdir(output_folder) if f.lower().endswith((".mp4", ".mov", ".mkv"))]
    if not video_files:
        print("❌ No video files found in output/")
        sys.exit(1)

    chosen_video = random.choice(video_files)
    print(f"🎞️ Chosen background video: {chosen_video}")

    clean_directory(public_video_folder)
    src_path = os.path.join(output_folder, chosen_video)
    dst_path = os.path.join(public_video_folder, "bk.mp4")
    shutil.copy(src_path, dst_path)
    print(f"📂 Copied and renamed to: public/videos/bk.mp4")

    # Render Remotion video
    # === Find available output filename like video1.mp4, video2.mp4, etc. ===
    output_dir = os.path.join(PROJECT_PATH, "out")
    os.makedirs(output_dir, exist_ok=True)

    i = 1
    while True:
        output_filename = f"video{i}.mp4"
        output_path = os.path.join(output_dir, output_filename)
        if not os.path.exists(output_path):
            break
        i += 1

    print(f"🎥 Rendering Remotion video to {output_filename}...")

    subprocess.run(
        ["npx", "remotion", "render", "MyComp", f"out/{output_filename}"],
        cwd=PROJECT_PATH,
        shell=True
    )


    print(f"✅ Completed: {video_key}")

# === ENTRY POINT ===
async def main():
    if len(sys.argv) < 2:
        print("⚠️ Usage: python tts.py [video1|video2|...|all]")
        sys.exit(1)

    targets = validate_input(sys.argv[1])

    for video in targets:
        await process_video(video)

if __name__ == "__main__":
    asyncio.run(main())


