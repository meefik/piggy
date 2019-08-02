p[1]="  ,,_   "
p[2]=" o\"  )~ "
p[3]="  ''''  "
p[4]="  \" ''  "
p[5]="  '' \"  "
y=`tput lines`
x=`tput cols`
let x=x-8,y=y-4,n=3
tput civis
tput cup $y 0
tput ed
while(true)
do
tput cup $y $x
let z=y
for i in 1 2 $n
do
tput cup $z $x
let z++
printf "${p[$i]}"
done
[ $n -ge 5 -o $x -eq 1 ] && n=2
[ $x -eq 0 ] && break
let x--,n++
sleep 0.3
done
tput cnorm
echo
