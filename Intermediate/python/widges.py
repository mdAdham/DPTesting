#%%#
import ipywidgets as widgets
from IPython.display import display

label = widgets.Label("Welcome to Python Widgets")
display(label)

button = widgets.Button(description="Click me")
def clickEvent(b):
    print("Button Clicked")
    
button.on_click(clickEvent)
display(button)
# %%
