print("Welcome to Books 'R' Us")
print("What is the selling price of the item:")
price = int(input())
print("What's the discount (%)")
discount = int(input())
discountedPrice = price - price * (discount/100) # price - discount
print("The final price is: $" + str(discountedPrice))