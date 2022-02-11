shapes = int(input())
heights = input()
heights = heights.split()
bases = input()
bases = bases.split()
area = 0
combined_heights = []
for i in range(shapes):
    combined_heights.append(int(heights[i]) + int(heights[i + 1]))

for i in range(shapes):
    area += combined_heights[i] * int(bases[i]) / 2
print(area)