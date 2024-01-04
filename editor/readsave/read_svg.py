#https://refaq.ru/voprosy/polosa_prokrutki_holsta_tkinter_s_setkoj
import os
import json
from tkinter.tix import *

struc_list = []
#выравнивание первого элемента массива
struc_list.append(0)

with open(os.path.join('editor','readsave','key_value.js'), encoding='utf8') as key_value:
    key_value = json.load(key_value)

def read_save(file_save,root):
    # add dict for save strure
    if file_save[-11:-3]=="TACTGAME":
        with open(os.path.join('editor','readsave','tac_save_offsets.js'), encoding='utf8') as data_file:
            save_data = json.load(data_file)
        entry_count=90
    elif file_save[-11:-3]=="SAVEGAME":
        with open(os.path.join('editor','readsave','save_offsets.js'), encoding='utf8') as data_file:
            save_data = json.load(data_file)
        entry_count = 133

    cur_row = 1
    cur_column = 1
    savef=open(file_save, 'rb')
    savef.seek(0)

    def struc_open(f):
        f = f.split('_')[1]
        top = Toplevel(root)
        #top.minsize(width=30, height=100)
        top.title(save_data[str(f)]["name"])
        var = tkinter.IntVar()

        r_part = tkinter.Frame(top)
        r_part.grid(row=0, column=1, sticky="nsew")

        l_part = tkinter.Frame(top)
        l_part.grid(row=0, column=0, sticky="nsew")
#for label
        label_part = tkinter.Frame(top)
        label_part.grid(row=0, column=2, sticky="nsew")

        r_canvas = tkinter.Canvas(r_part, bg="gray", width=418, height=320)
        r_canvas.grid(row=0, column=0, sticky="news")

        l_canvas = tkinter.Canvas(l_part, bg="gray", width=190, height=320)
        l_canvas.grid(row=0, column=0, sticky="news")

        # Link a scrollbar to the canvas
        vsb_r = tkinter.Scrollbar(r_part, orient="vertical", command=r_canvas.yview)
        vsb_r.grid(row=0, column=1, sticky='ns')
        r_canvas.configure(yscrollcommand=vsb_r.set)

        vsb_l = tkinter.Scrollbar(l_part, orient="vertical", command=l_canvas.yview)
        vsb_l.grid(row=0, column=1, sticky='ns')
        l_canvas.configure(yscrollcommand=vsb_l.set)

        var.set(0)
        field = {}
        global selected
        selected = {"name":None, "offsets":[]}

        def draw_label(event,entry,fld):
            entry_enum = []
            if entry["enum"] != "False":
                for keys in key_value[entry["enum"]]:
                    key_temp=key_value[entry["enum"]][keys]
                    entry_enum.append([key_temp,keys])
                def_enum=key_value[entry["enum"]][str(entry["entry"])]+" "+str(entry["entry"])


            def callback(selection):
                fld.config(state='normal')
                fld.delete(0, END)
                fld.insert(0, selection[0])
                fld.config(state='readonly')
                hexval = str(hex(int(selection[1])))
                txt = ("Hex: " + hexval + "\n" + "Offset : " + str(hex(entry['offset'])) + "("
                       + (str(entry['offset'])) + ")" + "\n" + 'Comment: ' + entry['comment'])
                label_help.config(text=txt)
                #save part
                savef = open(file_save, 'r+b')
                savef.seek(entry['offset'])
                savef.write(int(selection[1]).to_bytes(entry['size'], byteorder='little', signed=False))
                savef.close()

            if entry['sign'] != "string":
                hexval=str(hex((entry['entry'])))
            else:
                hexval = [ord(c) for c in entry['entry']]
                hexval = ''.join(str(e) for e in hexval)
            txt=("Hex: "+hexval +"\n"+"Offset : " + str(hex(entry['offset']))+"("
                 + (str(entry['offset'])) + ")" + "\n"+ 'Comment: ' + entry['comment'])
            label_help = Label(label_part, width=31, height=19, bd=5, bg='gray', justify="left", text=txt,
                               relief=RIDGE, anchor = 'nw')
           
            if entry['enum']=="False":
                label_emp=Label(label_part, width=31, height=1)
                label_emp.grid(row=1, column=0, columnspan=3)
                label_help.grid(row=2, column=0, columnspan=3)
            else:
                options = tkinter.StringVar()
                options.set(def_enum)  # default choice
                menu = tkinter.OptionMenu(label_part, options, *entry_enum, command=callback)
                menu.config(width=31)
                menu.grid(row=1, column=0, columnspan=3)
                label_help.grid(row=2, column=0, columnspan=3)


        def show_entry(entry):
            r_frame_buttons = tkinter.Frame(r_canvas)
            r_canvas.create_window((0, 0), window=r_frame_buttons, anchor='nw')
            for val_, entry_ in enumerate(entry):
                field[str(val_)] = Entry(r_frame_buttons,width=50)
                label = Label(r_frame_buttons,width=20, height=1, justify="left", text=(entry_['name']),relief=RIDGE)
                #field[str(val_)].insert(0,entry_['entry'])
                field[str(val_)].grid(row=val_, column=2)
                field[str(val_)].bind('<Button-1>',lambda event,fld=field[str(val_)], f=entry_: draw_label(event, f, fld))
                label.grid(row=val_, column=1)
                if entry_['enum'] != "False":
                    def_enum_ = key_value[entry_["enum"]][str(entry_["entry"])]
                    field[str(val_)].insert(0, def_enum_)
                    field[str(val_)].config(state='readonly')
                else:
                    field[str(val_)].insert(0, entry_['entry'])

            selected["offsets"] = []
            for entry_ in entry:
                selected["offsets"].append(entry_["offset"])

            r_frame_buttons.update_idletasks()
            r_canvas.config(scrollregion=r_canvas.bbox("all"))

        # Create a frame to contain the Radiobutton
        l_frame_buttons = tkinter.Frame(l_canvas)
        l_canvas.create_window((0, 0), window=l_frame_buttons, anchor='nw')
        for val, entry in enumerate(struc_list[int(f)]):
                name_enum = save_data[str(f)]["enum"]
                if name_enum != "False":
                    enum_type = save_data[str(f)]["enum_type"]
                    if enum_type != "False":
                        key_ =entry[int(enum_type)]['entry']
                        if name_enum != "True":
                            key = key_value[name_enum][str(key_)]
                        else:
                            key=key_
                    else:
                        key = key_value[name_enum][str(val)]
                else:
                    key = save_data[str(f)]["name"]

                tkinter.Radiobutton(l_frame_buttons,
                           text=key,
                           indicatoron=0,
                           width=20,
                           padx=20,
                           variable=var,
                           value=val, command=lambda f=entry: show_entry(f)).grid(row=val, column=0)
        l_frame_buttons.update_idletasks()
        l_canvas.config(scrollregion=l_canvas.bbox("all"))

        # for init 1 value
        show_entry(struc_list[int(f)][0])

        def save_comand():
            savef = open(file_save, 'r+b')
            for val, entry in enumerate(struc_list[int(f)]):
                for val_, entry_ in enumerate(entry):
                    savef.seek(entry_['offset'])
                    if entry_['sign'] == "False":
                        if entry_['enum'] == "False":
                                if int(entry_["offset"]) in selected["offsets"]:
                                    print(entry_)
                                    savef.write(int(field[str(val_)].get()).to_bytes(entry_['size'], byteorder='little', signed=False))
                        else:
                            savef.write(entry_['entry'].to_bytes(entry_['size'], byteorder='little', signed=True))
                    elif entry_['sign']== "True":
                        savef.write(int(field[str(val_)].get()).to_bytes(entry_['size'], byteorder='little', signed=True))
                    elif entry_['sign']== "string":
                        savef.write(field[str(val_)].get().encode('ascii', 'ignore'))
            savef.close()

        def dump_comand():
            k="org;"
            row=0
            m=0
            name_enum = save_data[str(f)]["enum"]
            name = save_data[str(f)]["name"]
            file_dump=name+".CSV"
            dumpf = open(file_dump, 'w')

            for val, entry in enumerate(struc_list[int(f)]):
                if m==0:
                    for val_1, entry_1 in enumerate(struc_list[int(f)]):
                        key_row = key_value[name_enum][str(val_1)]
                        k += str(key_row) + ";"
                    k = k + "\n"
                    m+=1
                key = key_value[name_enum][str(val)]
                k += str(key) + ";"
                for val_, entry_ in enumerate(entry):
                    k+=str(entry_['entry'])+";"
                k=k+"\n"

            dumpf.write(k)
            dumpf.close()



        Button(label_part, text="SAVE", width=15, command=lambda: save_comand()).grid(row=0, column=0)
        Button(label_part, text="CLOSE", width=15, command=lambda: top.destroy()).grid(row=0, column=1)
        Button(label_part, text="DUMP", width=15, command=lambda: dump_comand()).grid(row=1, column=0)
        top.transient(root)
        top.grab_set()
        top.focus_set()
        top.wait_window()

    def simple_open(f):
        f=f.split('_')[1]
        save_entry=struc_list[int(f)]['entry']
        #create modal window
        top = Toplevel(root)
        top.minsize(width=600, height=30)
        top.title(save_data[str(f)]["name"])

        field=Entry(top,width=50)
        field.insert(0,save_entry)
        field.grid(row=0, column=0)
        comment=save_data[str(f)]["comment"]
        label = Label(top,justify="left", text= ("Offset : " + str(hex(struc_list[int(f)]['offset']))+"("+(str(struc_list[int(f)]['offset']))+")"+"\n"+comment))
        label.grid(row=1, column=0)
        enum=save_data[str(f)]["enum"]

        entry=[]

        def save_comand():
            savef = open(file_save, 'r+b')
            savef.seek(struc_list[int(f)]['offset'])
            if struc_list[int(f)]['type']== "False":
                savef.write(int(field.get()).to_bytes(8, byteorder='little', signed=False))
            elif struc_list[int(f)]['type']== "True":
                savef.write(int(field.get()).to_bytes(8, byteorder='little', signed=True))
            elif struc_list[int(f)]['type']== "string":
                savef.write(field.get().encode('ascii', 'ignore'))
            savef.close()

        #add enum for struk
        if save_data[str(f)]["enum"]!="False":
            num = save_data[str(f)]["enum_num"]
            for k in range(num):
                entry.append(str(k) + "-" + key_value[enum][str(k)])

            field.config(state='readonly')
            def callback(selection):
                field.config(state='normal')
                field.delete(0, END)
                field.insert(0, selection.split('-')[0])

#set menu button for simple open
            options = tkinter.StringVar()
            menu = tkinter.OptionMenu(top, options,*entry, command=callback)
            menu.config(width=15)
            menu.grid(row=0, column=1)
            options.set(key_value[enum][save_entry])


        Button(top, text="SAVE",width=20,command=lambda: save_comand()).grid(row=1, column=2)
        Button(top, text="CLOSE",width=20,command=lambda: top.destroy()).grid(row=1, column=3)
        top.transient(root)
        top.grab_set()
        top.focus_set()
        top.wait_window()


    for x in range(1,entry_count) :
        name = save_data[str(x)]["name"]
        type=save_data[str(x)]["type"]

        if type=="simple":
            sign_gl = save_data[str(x)]["sign"]
            size = save_data[str(x)]["size"]
            comment=save_data[str(x)]["comment"]
            offset = savef.tell()



            if sign_gl=="string":
                entry = savef.read(size)
                entry = entry.decode(encoding="latin").rstrip('\x00')
            elif sign_gl == "seek":
                savef.seek(size, 1)
                entry = size
                offset = savef.tell()
            else:
                entry = savef.read(size)
                entry=int.from_bytes(entry, byteorder='little',signed=sign_gl)

            struc_template = {
                'name': name,
                'type': sign_gl,
                'size': size,
                'comment': comment,
                'offset': offset,
                'entry': str(entry),
            }
            struc_list.append(struc_template)

        elif type=="struc":
            member = int(save_data[str(x)]["struc_member"])
            count = save_data[str(x)]["struc_count"]
            list_temp=[]
            for k in range(count):
                list_temp.append([])
                for n in range(member):
                    name = save_data[str(x)]["struc"][str(n)]["name"]
                    sign_gl = save_data[str(x)]["struc"][str(n)]["sign"]
                    enum = save_data[str(x)]["struc"][str(n)]["enum"]
                    size = save_data[str(x)]["struc"][str(n)]["size"]
                    comment = save_data[str(x)]["struc"][str(n)]["comment"]
                    offset = savef.tell()
                    entry = savef.read(size)
                    if sign_gl == "string":
                        entry = entry.decode(encoding="latin").rstrip('\x00')
                    elif sign_gl == "False":
                            entry = int.from_bytes(entry, byteorder='little', signed=False)
                    elif sign_gl == "True":
                        entry = int.from_bytes(entry, byteorder='little', signed=True)

                    struc_template = {
                        'name' : name,
                        'size' : size,
                        'comment' : comment,
                        'offset' : offset,
                        'enum': enum,
                        'sign': sign_gl,
                        'entry' : entry,
                        }
                    list_temp[k].append(struc_template)
            struc_list.append(list_temp)



    savef.close()

    #add botton 132
    for y in range(1, entry_count):
        #Добавляем кнопки
        name=save_data[str(y)]["name"]
        tooltip = save_data[str(y)]["comment"]
        type = save_data[str(y)]["type"]
        sign_gl = save_data[str(y)]["sign"]
        btn = "btn_" + str(y)


        if type=="struc":
            btn = Button(root, text=name, width=26, height=1, command=lambda f=btn: struc_open(f))
        elif type=="simple" and sign_gl!="string" and sign_gl != "seek":
            enum = save_data[str(y)]["enum"]
            if enum!="False":
                key = key_value[enum][str(struc_list[int(btn.split('_')[1])]['entry'])]
                btn = Button(root, text=name + "=" + key, width=26, height=1,
                             command=lambda f=btn: simple_open(f))
            else:
                btn=Button(root, text=name+"="+str(struc_list[int(btn.split('_')[1])]['entry']), width=26, height=1,
                       command=lambda f = btn: simple_open(f))
        elif type=="simple" and sign_gl == "seek":
            btn = Button(root, text=name, width=26, height=1)
        else:
            btn = Button(root, text=name, width=26, height=1, command=lambda f=btn: simple_open(f))

        btn.grid(row=cur_row, column=cur_column)
        ToolTp = Balloon()
        ToolTp.bind_widget(btn, balloonmsg=tooltip)
        cur_row+=1
        if cur_row>=20:
            cur_column+=1
            cur_row=1

    root.mainloop()
    return

