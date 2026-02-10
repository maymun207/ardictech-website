from PIL import Image

def get_corner_color(image_path):
    img = Image.open(image_path).convert('RGB')
    width, height = img.size
    
    # Get colors of the four corners
    corners = [
        img.getpixel((0, 0)),
        img.getpixel((width - 1, 0)),
        img.getpixel((0, height - 1)),
        img.getpixel((width - 1, height - 1))
    ]
    
    # Average the colors
    avg_color = tuple(sum(col) // 4 for col in zip(*corners))
    return '#{:02x}{:02x}{:02x}'.format(*avg_color)

if __name__ == "__main__":
    path = "/Users/tunckahveci/Desktop/2026 - MyCodes/ardictechwebpage-AG/ardictech-website/public/images/journey-flow-v3.png"
    print(get_corner_color(path))
