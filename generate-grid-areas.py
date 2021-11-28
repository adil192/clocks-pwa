from random import shuffle

numbers = [i for i in range(1, 721)]
shuffle(numbers)

flag = False

for i in range(720//10):
	print("		\"", end="")
	if flag: print(". ", end="")
	for j in range(10):
		num = numbers.pop()
		for _ in range(2):
			print("c" + str(num), end=" ")
	if not flag: print(". ", end="")
	print("\"")
	flag = not flag