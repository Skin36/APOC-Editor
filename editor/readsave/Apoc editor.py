from tkinter import *
from tkinter import filedialog as fd
from editor.readsave.read_svg import read_save
from tkinter.tix import *


def opensvg():
    root = Tk()
    root.minsize(width=500, height=400)
    root.title("Savegame editor")
    def butCallback():
        root.destroy()
        mainScreen()
    b1 = Button(text="Return", width=30, height=2, command=butCallback)
    b1.grid(row=21, column=3, columnspan = 2)
    fileOpen = fd.askopenfile(defaultextension=".0*", filetypes=[("All types", ".0*")], initialdir="./SAVEGAME")
    ToolTp = Balloon()
    read_save(fileOpen.name,root)
    root.mainloop()

def exitWin():
    root.destroy()

def mainScreen():
    root = Tk()
    root.minsize(width=500, height=400)
    root.title("Apoc editor")

    b1=Button(text="Cityscape editor", width=30, height=2)
    b2=Button(text="Cityscape files editor", width=30, height=2)
    b3=Button(text="Battlescape editor", width=30, height=2)
    b4=Button(text="Battlescape files editor", width=30, height=2)

    def butCallback():
        root.destroy()
        opensvg()
    b5=Button(root, text='Savedgames editor', width=30, height=2, command=butCallback)

    b6=Button(text="Games patcher", width=30, height=2)
    b7=Button(text="Exit", width=30, height=2,command=root.destroy)

    Label(text="Press to edit:", width=20, height=2).pack()

    #b7.bind('<ButtonRelease-1>',exitWin)
    b1.pack()


    b2.pack()
    b3.pack()
    b4.pack()
    b5.pack()
    b6.pack()
    b7.pack()

    ToolTp = Balloon()
    ToolTp.bind_widget(b1, balloonmsg="edit ufo2p.exe")
    ToolTp.bind_widget(b2, balloonmsg="edit Cityscape files in 'UFODATA' folder")
    ToolTp.bind_widget(b3, balloonmsg="edit TACP.EXE")
    ToolTp.bind_widget(b4, balloonmsg="edit Battlescape files in 'TACDATA' folder")
    ToolTp.bind_widget(b5, balloonmsg="edit Savedgames")
    ToolTp.bind_widget(b6, balloonmsg="Patch game")
    ToolTp.bind_widget(b7, balloonmsg="Exit editor")
    root.mainloop()

if __name__ == '__main__':
    mainScreen()
