from tkinter import filedialog as fd
from editor.readsave.read_svg import read_save
from editor.dump_ai.dump_ai import read_weap
from editor.dump_ai.dump_ai import read_brain
from editor.dump_ai.dump_ai import read_exp
from tkinter.tix import *
from tkinter import ttk


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
    #ToolTp = Balloon()
    read_save(fileOpen.name,root)
    root.mainloop()

def openai():
    root = Tk()
    root.minsize(width=200, height=1)
    root.title("DUMP")
    aileb1 = Label(root,text="Open...", width=30, height=2)
    aileb1.grid(row=1, column=1, columnspan=2)

    def butCallback_AI1():
        fileOpen = fd.askopenfile(defaultextension=".dat", filetypes=[("All types", "weap*.dat")],
                                  initialdir="./AIFILES")
        read_weap(fileOpen.name,0)
        top = Toplevel(root)
        top.minsize(width=200, height=1)
        top.title("DUMP weapexp")
        aileb = Label(top, text="DONE", width=30, height=2)
        aileb.grid(row=1, column=1, columnspan=2)
    b1_ai = Button(root,text="Open weapexp.dat", width=30, height=2, command=butCallback_AI1)

    def butCallback_AI2():
        fileOpen = fd.askopenfile(defaultextension=".0*", filetypes=[("All types", ".0*")], initialdir="./SAVEGAME")
        read_weap(fileOpen.name, 1)
        top = Toplevel(root)
        top.minsize(width=200, height=1)
        top.title("DUMP BRAIN")
        aileb = Label(top, text="DONE", width=30, height=2)
        aileb.grid(row=1, column=1, columnspan=2)
    b2_ai = Button(root,text="Open weapexp City save", width=30, height=2, command=butCallback_AI2)

    b3_ai = Button(root,text="Open weapexp Tac save", width=30, height=2)
    spr1_ai=ttk.Separator(root, orient = HORIZONTAL)


    def butCallback_BR():
        fileOpen = fd.askopenfile(defaultextension=".dat", filetypes=[("All types", "BRAIN*.dat")],
                                  initialdir="./AIFILES")
        read_brain(fileOpen.name)
        top = Toplevel(root)
        top.minsize(width=200, height=1)
        top.title("DUMP BRAIN")
        aileb = Label(top, text="DONE", width=30, height=2)
        aileb.grid(row=1, column=1, columnspan=2)
    b4_ai = Button(root, text="Open brain.dat", width=30, height=2, command=butCallback_BR)
    b5_ai = Button(root, text="Open brain City save", width=30, height=2)
    b6_ai = Button(root, text="Open brain Tac save", width=30, height=2)
    spr2_ai = ttk.Separator(root, orient=HORIZONTAL)



    def butCallback_exp():
        fileOpen = fd.askopenfile(defaultextension=".dat", filetypes=[("All types", "EXPER*.dat")],
                                  initialdir="./AIFILES")
        read_exp(fileOpen.name)
        top = Toplevel(root)
        top.minsize(width=200, height=1)
        top.title("DUMP EXPERIEN")
        aileb = Label(top, text="DONE", width=30, height=2)
        aileb.grid(row=1, column=1, columnspan=2)
    b7_exp = Button(root, text="Open EXPERIEN.dat", width=30, height=2, command=butCallback_exp)
    b8_exp = Button(root, text="Open EXPERIEN City save", width=30, height=2)
    b9_exp = Button(root, text="Open EXPERIEN Tac save", width=30, height=2)


    b1_ai.grid(row=2, column=1, columnspan=2)
    b2_ai.grid(row=3, column=1, columnspan=2)
    b3_ai.grid(row=4, column=1, columnspan=2)
    spr1_ai.grid(row=5, column=1, columnspan=2, sticky='ew', pady=5)
    #spr1_ai.rowconfigure(1, weight=1)
    b4_ai.grid(row=6, column=1, columnspan=2)
    b5_ai.grid(row=7, column=1, columnspan=2)
    b6_ai.grid(row=8, column=1, columnspan=2)
    spr2_ai.grid(row=9, column=1, columnspan=2, sticky='ew', pady=5)
    b7_exp.grid(row=10, column=1, columnspan=2)
    b8_exp.grid(row=11, column=1, columnspan=2)
    b9_exp.grid(row=12, column=1, columnspan=2)


    root.mainloop()

def mainScreen():
    root = Tk()
    root.minsize(width=500, height=400)
    root.title("Apoc editor")

    b1=Button(text="Cityscape editor", width=30, height=2)
    b2=Button(text="Cityscape files editor", width=30, height=2)
    b3=Button(text="Battlescape editor", width=30, height=2)
    b4=Button(text="Battlescape files editor", width=30, height=2)

    def butCallback5():
        root.destroy()
        opensvg()
    b5=Button(root, text='Savedgames editor', width=30, height=2, command=butCallback5)

    def butCallback6():
        root.destroy()
        openai()
    b6=Button(text="DUMP AI files", width=30, height=2, command=butCallback6)
    b7=Button(text="Exit", width=30, height=2,command=root.destroy)
    Label(text="Press to edit:", width=20, height=2).pack()

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
