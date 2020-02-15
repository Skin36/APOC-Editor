import os




sfont = open('SMALFONT.DAT', 'rb')
ssfont = open('SMALLSET.DAT', 'rb')



white = {1:1,2:2,}
blue = {1:7,2:9,}
cyan = {1:109, 2:86,}
green = {1:96,2:101,}

#224 ширина    384 ширина
def bf_convert():
    bfont = open('BIGFONT.dat', 'rb')
    for y in range (24):
        for x in range (14):
            font_ind = fontdat.read(1)
            font_ind = int.from_bytes(font_ind, byteorder='little', signed=False)
            font_ind+=229
            bf_array[x, y]=font_ind
    print(bf_array)


    fontdat.close()







bfont.close()
sfont.close()
ssfont.close()