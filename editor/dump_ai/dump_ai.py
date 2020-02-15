import os
import struct

unit_type={
  0:"X-COM Agent",
  1:"Multiworm egg",
  2:"Brainsucker",
  3:"Multiworm",
  4:"Hyperworm",
  5:"Chrystali",
  6:"Anthropods",
  7:"Skeletoids",
  8:"Spitter",
  9:"Poppers",
  10:"Megaspawn",
  11:"Psimorphs",
  12:"Quinspawn",
  13:"Micronoid_aggregate",
  14:"Police"
}

weapon_num={
0:"Megapol AP Grenade",
1:"Megapol Stun Grenade",
2:"Megapol Smoke Grenade",
3:"Marsec Proximity Mine",
4:"Marsec High Explosive",
5:"Megapol Lawpistol",
6:"Marsec M4000 Machine Gun",
7:"Megapol Laser Sniper Gun",
8:"Megapol Auto Cannon (AP)",
9:"Megapol Auto Cannon (HE)",
10:"Megapol Auto Cannon (IN)",
11:"Megapol Plasma Gun",
12:"Marsec Heavy Launcher (AP)",
13:"Marsec Heavy Launcher (HE)",
14:"Marsec Heavy Launcher (IN)",
15:"MiniLauncher (AP)",
16:"MiniLauncher (HE)",
17:"MiniLauncher (IN)",
18:"PSI-Grenade",
19:"Toxigun (A)",
20:"Toxigun (B)",
21:"Toxigun (C)",
22:"Disruptor Gun",
23:"Devastator Cannon",
24:"Boomeroid",
25:"Power Sword",
26:"Brainsucker Launcher",
27:"Entropy Launcher",
28:"Dimension Missile Launcher",
29:"Vortex Mine",
30:"Tracker Gun",
31:"Alien Gas Grenade",
32:"Megapol Stun Grapple",
33:"ForceWeb",
34:"Dimension Destabiliser",
35:"Incendiary Grenade",
36:"Megaspawn's Disruptor",
37:"Megaspawn's Launcher",
38:"Spitter's Vomit Funnel",
39:"Multiworm's Spit",
40:"Alien Egg's Vomit Tube",
41:"Hyperworm's Bite",
42:"Queenspawn's Tentacles",
43:"Popper's Bomb"
}

shield_type={
0:"Megapol Leg Armor",
1:"Megapol Body Armor",
2:"Megapol Right Arm Armor",
3:"Megapol Left Arm Armor",
4:"Megapol Helmet",
5:"Marsec Leg Units",
6:"Marsec Body Unit",
7:"Marsec Right Arm Unit",
8:"Marsec Left Arm Unit",
9:"Marsec Head Unit",
10:"X-COM Leg Shields",
11:"X-COM Body Shield",
12:"X-COM Right Arm Shield",
13:"X-COM Left Arm Shield",
14:"X-COM Head Shield",
15:"Alien type1 Head Arm Armor",
16:"Alien type1 Body Armor",
17:"Alien type1 Right Arm Armor",
18:"Alien type1 Left Arm Armor",
19:"Alien type1 Leg Armor",
20:"Alien type2 Head Arm Armor",
21:"Alien type2 Body Armor",
22:"Alien type2 Right Arm Armor",
23:"Alien type2 Left Arm Armor",
24:"Alien type2 Leg Armor",
25:"Alien type2 Rear Armor",

}




def read_exp(file_save):
    exper_struc = ["dw", "dd", "dd", "dd",
                   "dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd","dd",
                   "dd", "dd", "dd","dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd", "dd"]

    exper_struc_row_25 = [" ","flag", "index", "row",
                          "unit_count", "brainsucer", "avr_max_health", "avr_curr_health", "avr_curr_max_TU",
                          "number_of_units_hit", "damage_taken_count", "dispersion", "avr_losarea_value",
                          "number_of_units_hit_3", "WEAPEXP_2", "accuracy","agent_count", "max_health",
                          "current_health", "curr_max_TU ","number_of_units_hit_2", "dispersion_2", "protect",
                          "squad_count", "aver_max_health", "avr_move_mode", "dispersion","WEAPEXP_1","dist",
                          "weight"]

    exper_struc_row_9_1 = [" ", "flag", "index", "row",
                          "unit_count", "brainsucer", "avr_max_health", "avr_curr_health", "avr_curr_max_TU",
                          "number_of_units_hit", "damage_taken_count", "dispersion", "avr_losarea_value",
                           "empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty",
                           "empty","empty","empty","empty","empty","weight"]

    exper_struc_row_17 = [" ", "flag", "index", "row",
                         "unit_count", "brainsucer", "avr_max_health", "avr_curr_health", "avr_curr_max_TU",
                         "number_of_units_hit", "avr_damage_taken", "average_dist","WEAPEXP_2_value","number_2",
                          "field_28","field_2C","dist","WEAPEXP_1_value","const","field_39","field_40",
                          "empty","empty","empty","empty","empty","empty","empty","empty","weight"]

    exper_struc_row_12 = [" ", "flag", "index", "row",
                         "unit_count", "brainsucer", "avr_max_health", "avr_curr_health", "avr_curr_max_TU",
                         "number_of_units_hit", "avr_damage_taken", "average_dist","losarea_field_62","fuild_62_value",
                          "losarea_val_9ED80_1","losarea_val_9ED80_2",
                          "empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty",
                          "empty","empty","weight"]



    exper_struc_row_16 = [" ", "flag", "index", "row",
                         "unit_count", "brainsucer", "avr_max_health", "avr_curr_health", "avr_curr_max_TU",
                         "number_of_units_hit", "avr_damage_taken", "average_dist","WEAPEXP_2_value","number_2",
                          "max_health_array","agent_move_mode","dist","WEAPEXP_1_value","constant","field_39",
                          "empty","empty","empty","empty","empty","empty","empty","empty","empty","weight"]


    exper_struc_row_9_11 = [" ", "flag", "index", "row",
                           "unit_count", "brainsucer", "avr_max_health", "avr_curr_health", "number_of_units_hit",
                           "avr_damage_taken","losarea1","average_dist","losarea2",
                            "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
                            "empty","empty", "empty", "empty", "empty", "empty", "weight"]
    header={
        "25":exper_struc_row_25,
        "91": exper_struc_row_9_1,
        "12": exper_struc_row_12,
        "17": exper_struc_row_17,
        "16": exper_struc_row_16,
        "911": exper_struc_row_9_11
    }



    savef=open(file_save, 'rb')
    writef = file_save.split("/")[-1][:-3] + "csv"
    writef = open(writef, 'w')
    head_array=[]
    struc_count = os.path.getsize(file_save)//114
    for z in range(struc_count):
        for n, l in enumerate(exper_struc):
            if l=="dw":
                entry1 = savef.read(2)
                entry1 = int.from_bytes(entry1, byteorder='little')
            elif l == "dd":
                entry1 = savef.read(4)
                entry1 = int.from_bytes(entry1, byteorder='little')
            if n==1:
                entry2=entry1
            if n==2:
                if entry2==1:
                    head_array.append(91)
                elif entry2==11:
                    head_array.append(911)
                else:
                    head_array.append(entry1)

    savef.seek(0)
    for x in range(struc_count):
        for h in header[str(head_array[x])]:
            writef.write(h + ";")
        writef.write('\n')


        writef.write("entry" + str(x+1) + ";")
        for n in exper_struc:
            if n=="dw":
                entry = savef.read(2)
                entry = int.from_bytes(entry, byteorder='little')
                writef.write(str(entry)+";")
            elif n == "dd":
                entry = savef.read(4)
                entry = int.from_bytes(entry, byteorder='little')
                writef.write(str(entry) + ";")

        writef.write('\n')
    savef.close()
    writef.close()
    return


def read_brain(file_save):
    savef = open(file_save, 'rb')
    writef = file_save.split("/")[-1][:-3] + "csv"
    writef = open(writef, 'w')
#header part
    writef.write("index;row count;section;")
    for s in range (1,7):
        for d in range (1,26):
            for f in range (1,13):
                writef.write(str(s)+"_" + str(d) + "_""12_" + str(f) + ";")
        writef.write("total " + str(s)+"_12"+ ";")
        for g in range(1,26):
            for h in range(1,26):
                writef.write(str(s) + "_" + str(g) + "_""25_" + str(h) + ";")
        #writef.write("total " + str(s) + "_24"+ ";")

    writef.write('\n')
# header part


    for n in range (25):
        for r in range(3):
            entry = savef.read(4)
            entry = int.from_bytes(entry, byteorder='little')
            writef.write(str(entry) + ";")
        for k in range(5556):
            if k != 55555:
                entry = savef.read(4)
                entry = struct.unpack('f',entry )
                entry=str(entry)[:-2] + ")"
                writef.write(entry + ";")
            else:
                entry = savef.read(4)
                entry = struct.unpack('f', entry)
                entry = str(entry)[:-2] + ")"
                writef.write(entry)
        writef.write('\n')
    savef.close()
    writef.close()


def read_weap(file_save,type):
    savef=open(file_save, 'rb')
    if type==1:
        savef.seek(448300)
        writef = file_save.split("/")[-1][:-3] + "_weapexp" + ".csv"
    else:
        writef=file_save.split("/")[-1][:-3]+"csv"
    writef = open(writef, 'w')

    writef.write("Alien receive damage"+'\n')
    writef.write("weapon/armor;")
    for unit in range(0, 15):
        if unit != 14:
            writef.write(unit_type[unit] + ";")
        else:
            writef.write(unit_type[unit] + '\n')
    for weapon in range(0,44):
        for shield in range(0, 26):
            writef.write(weapon_num[weapon] + "->")
            writef.write(shield_type[shield])
            writef.write(";")
            for unit in range(0, 15):
                if unit != 14:
                    entry = savef.read(1)
                    entry = int.from_bytes(entry, byteorder='little')
                    writef.write(str(entry)+ ";")
                else:
                    entry = savef.read(1)
                    entry = int.from_bytes(entry, byteorder='little')
                    writef.write(str(entry) + '\n')


    writef.write("X-Com receive damage" + '\n')
    writef.write("weapon/armor;")
    for unit in range(0, 15):
        if unit != 14:
            writef.write(unit_type[unit] + ";")
        else:
            writef.write(unit_type[unit] + '\n')
    for weapon in range(0,44):
        for shield in range(0, 26):
            writef.write(weapon_num[weapon] + "->")
            writef.write(shield_type[shield])
            writef.write(";")
            for unit in range(0, 15):
                if unit != 14:
                    entry = savef.read(1)
                    entry = int.from_bytes(entry, byteorder='little')
                    writef.write(str(entry)+ ";")
                else:
                    entry = savef.read(1)
                    entry = int.from_bytes(entry, byteorder='little')
                    writef.write(str(entry) + '\n')


    savef.close()
    writef.close()
    return