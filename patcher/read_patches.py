#for ufo2p +626A4
#for ufo2p4 +624A4
#for tacp +5AAA4
#for tacp4 +5A8A4

import os
import json
from tkinter import filedialog as fd
from tkinter.tix import *

def read_patch(root):

    # create modal window
    top = Toplevel(root)
    top.minsize(width=600, height=30)
    top.title("Patcher")

    label_file = Label(top, justify=LEFT, text="Not Open",)
    label_file.grid(row=1, column=2)

    label_patch = Label(top, text="Not Open", justify=LEFT)
    label_patch.grid(row=2, column=2)

    Button(top, text="Open game", width=20, command=lambda: open_file(label_file)).grid(row=1, column=1)
    Button(top, text="Open patch", width=20, command=lambda: open_patch(label_patch)).grid(row=2, column=1)
    Button(top, text="PATCH", width=20, command=lambda: patch_File(label_file,label_patch,top)).grid(row=3, column=1)
    Button(top, text="SET DEFAULT", width=20, command=lambda: depatch_File(label_file,label_patch,top)).grid(row=4, column=1)
    Button(top, text="Close patcher", width=20, command=lambda: top.destroy()).grid(row=5, column=1)

    top.transient(root)
    top.grab_set()
    top.focus_set()
    top.wait_window()
    root.mainloop()
    return

def open_file(lebel):
    fileopen = fd.askopenfile(defaultextension=".exe", filetypes=[("All types", ".exe")], initialdir="./patcher/patches")
    lebel['text'] = fileopen.name
    lebel['justify'] = LEFT


def open_patch(lebel):
    patchopen = fd.askopenfile(defaultextension=".js", filetypes=[("All types", ".js")], initialdir="./patcher/patches")
    lebel['text'] = patchopen.name
    lebel['justify'] = LEFT


def patch_File(l_file,l_patch,top):
    patch_path = l_patch['text']
    file_path = l_file['text']
    fileopen_op_r= open(file_path, 'r+b')
    f_ver = os.path.getsize(file_path)
    type="None"
    if f_ver== 3170298:
        type="TACP"
    elif f_ver== 3161594:
        type = "TACP4"
    elif f_ver == 1702206:
        type = "UFO2P"
    elif f_ver == 1705790:
        type = "UFO2P4"

    with open(patch_path, encoding='utf8') as patchopen_op:
        patchopen_op_j = json.load(patchopen_op)

    for x in range(1,len(patchopen_op_j)+1) :
        mod_byte = patchopen_op_j[type][str(x)]["modified"]
        fileopen_op_r.seek(int(patchopen_op_j[type][str(x)]["address"],16))
        fileopen_op_r.write(int(mod_byte,16).to_bytes(1, byteorder='little', signed=False))
    fileopen_op_r.close()

    top1 = Toplevel(top)
    top1.minsize(width=30, height=30)
    label = Label(top1, text="Patched", justify=CENTER)
    label.pack()


def depatch_File(l_file,l_patch,top):
    patch_path = l_patch['text']
    file_path = l_file['text']
    fileopen_op_r= open(file_path, 'r+b')
    with open(patch_path, encoding='utf8') as patchopen_op:
        patchopen_op_j = json.load(patchopen_op)

    for x in range(1,len(patchopen_op_j)+1) :
        mod_byte = patchopen_op_j[str(x)]["default"]
        fileopen_op_r.seek(int(patchopen_op_j[str(x)]["address"],16))
        fileopen_op_r.write(int(mod_byte,16).to_bytes(1, byteorder='little', signed=False))
    fileopen_op_r.close()

    top1 = Toplevel(top)
    top1.minsize(width=30, height=30)
    label = Label(top1, text="Depatched", justify=CENTER)
    label.pack()