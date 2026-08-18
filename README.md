# Video-link-detector
Video Link Detector is a simple and lightweight Chrome extension designed to detect publicly accessible direct video and streaming URLs requested by web pages. The extension can identify common media formats such as MP4, M3U8, WebM, M4V, and MPD and display detected links in an easy-to-use popup interface.

The goal of this project is to provide a convenient tool for developers, testers, learners, and users who want to inspect media resources loaded by a web page. When supported media requests are detected, the extension stores the URLs for the current browser tab and allows users to view and copy them directly from the extension popup. Duplicate links are automatically filtered to keep the results clean and organized.

Video Link Detector is built using HTML, CSS, JavaScript, and Chrome Extension Manifest V3. It does not require a separate backend server, terminal integration, or platform-specific software, allowing the extension interface to work on supported Chromium-based browsers across Windows, Linux, and other compatible systems.

For users who have permission to download publicly accessible media, detected URLs may also be used with compatible command-line tools such as yt-dlp, depending on the website and media format. Installation instructions for Linux and Windows can be provided in this repository.

This project does not bypass DRM, decrypt protected streams, remove content protection, or provide access to restricted media. Users are responsible for respecting copyright, website terms, and applicable laws.

Video Link Detector is intended for educational, development, testing, and legitimate media inspection purposes.

<img width="466" height="651" alt="Screenshot from 2026-08-18 10-21-10" src="https://github.com/user-attachments/assets/50028913-2b80-41d1-b69d-77bdf661f058" />


# Chrome Extension Usage
Video Link Detector works directly inside Chrome through a simple extension popup. After installing the extension, open a supported website or your own test environment containing publicly accessible video resources. Start the video or allow the page to load its media resources, then click the Video Link Detector extension icon.

The extension checks supported network requests and displays detected direct media URLs, including MP4, M3U8, WebM, M4V, and MPD when those URLs are exposed to the browser and match the supported detection rules. Each detected result is associated with the current browser tab, helping keep links from different websites separate.

Users can copy a detected URL from the popup and use it for legitimate testing, development, debugging, or other authorized purposes. On Linux and Windows, compatible command-line tools such as yt-dlp may be used where the user has permission and the website or media format is supported.

The extension does not guarantee detection of every video because some websites use dynamically generated URLs, custom media delivery systems, signed requests, or protected streaming. DRM-protected or encrypted content is not bypassed or decrypted by this extension.

Always ensure you have permission to access, copy, or download media and follow the website's terms and applicable laws.

<img width="466" height="651" alt="Screenshot from 2026-08-18 10-20-36" src="https://github.com/user-attachments/assets/50be8ccb-d763-4e3f-9c5a-4b9d5259a1b1" />


# Apply in chrome extension
1. Download the Video Link Detector ZIP file from this GitHub repository.

2. Extract/Unzip the downloaded ZIP file.

   Important: Do not select the ZIP file directly in Chrome.
   First, extract it into a normal folder.

3. Open Google Chrome.

4. Enter the following address in the Chrome address bar:

   chrome://extensions/

<img width="379" height="61" alt="Screenshot from 2026-08-18 10-21-37" src="https://github.com/user-attachments/assets/a9b0ab41-8621-4071-80e9-04f4c5516fd6" />



6. Enable Developer mode from the top-right corner.

<img width="259" height="52" alt="Screenshot from 2026-08-18 10-21-42" src="https://github.com/user-attachments/assets/6dd5f0c5-7afd-4c93-b46e-94d5d0dc9926" />

7. Click the Load unpacked button.

<img width="454" height="147" alt="Screenshot from 2026-08-18 10-21-50" src="https://github.com/user-attachments/assets/34f5f2bb-3dc1-4609-bce8-b3babe1fd96a" />

8. Select the extracted Video Link Detector folder.
<img width="803" height="1015" alt="Screenshot from 2026-08-18 10-22-06" src="https://github.com/user-attachments/assets/b2b3c334-b165-4203-b09c-9ff04c3b427f" />

9. Chrome will load the extension.
<img width="574" height="328" alt="Screenshot from 2026-08-18 10-22-13" src="https://github.com/user-attachments/assets/d2682884-dd48-47c6-a2bc-33b400ee01fd" />

10. Pin the Video Link Detector extension from the Extensions menu if you want quick access.

11. Open a supported website or test environment, play the media, and click the Video Link Detector icon to view detected links.


# 📥 Install yt-dlp
🐧 Linux

Arch Linux:

sudo pacman -S yt-dlp

Ubuntu/Debian:

sudo apt update
sudo apt install yt-dlp

Check installation:

yt-dlp --version

🪟 Windows 

winget install yt-dlp.yt-dlp

# Command Prompt/PowerShell me check:

yt-dlp --version

# 🎬 Video Download

Extension se detected link copy karo.

1. Current folder me download
yt-dlp "VIDEO_URL"

Example:

yt-dlp "https://example.com/video.mp4"

Isme video usi folder me download hogi jahan se tum command chala rahe ho.

2. Specific path/folder me download

Linux:

yt-dlp -P "/home/USERNAME/Videos" "VIDEO_URL"

Example:

yt-dlp -P "$HOME/Videos" "https://example.com/video.mp4"

Windows PowerShell:

yt-dlp -P "C:\Users\USERNAME\Videos" "VIDEO_URL"

Example: Downloads folder me:

yt-dlp -P "$HOME\Downloads" "VIDEO_URL"

📌 Simple flow

Open Video Website
       ↓       
Play Video
       ↓       
Video Link Detector
       ↓       
Copy detected URL
       ↓       
yt-dlp "VIDEO_URL"
       ↓    
Video downloads to current folder


Ya:

yt-dlp -P "YOUR_FOLDER_PATH" "VIDEO_URL"
       ↓
Video downloads to your selected folder

# Author
Asmit singh
