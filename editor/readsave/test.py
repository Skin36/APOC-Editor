x1=10
y1=10


x2=9
y2=10




x=(x1*x1+y1*y1)
y=(x2*x2+y2*y2)
xyz=(x+y)//2

average_x=(x1+x2)//2
average_y=(y1+y2)//2

average_x_2=average_x*average_x
average_y_2=average_y*average_y
average=average_x_2+average_y_2


new_x=(x1+x2)-average_x
new_y=(y1+y2)-average_y
new_2=new_x*new_x+new_y*new_y
disp=new_2


print(xyz-average,disp)
