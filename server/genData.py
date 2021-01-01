names = ["LUCY","SADIE","MAX","BUDDY","BAILEY","CHARLIE","DAISY","JACK","GINGER","MOLLY","LILY","BEAR","ROXY","LUNA","ABBY","COOPER","MAGGIE","ROCKY","DUKE","KENAI","RILEY","WILLOW","KODA","SHADOW","JAKE","RUBY"]
animals = ["Dog", "Cat"]
breeds = {
	'Dog' : ['Husky', 'BullDog', 'Golden Retriever'],
	'Cat' : ['Persian', 'Thai']
}
location = ["01002", "01003", "01375"]
favs = ["apple", "orange", "nuts"]
about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique efficitur arcu eu volutpat. Integer efficitur interdum leo, sit amet viverra ipsum venenatis sed. Nam et lectus eget sapien porttitor semper et et lacus. Ut ut molestie erat, ut pulvinar enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"

import random
import json

count = 1

animalsJSON = []
for n in names:
	animal = {}
	animal['id'] = count
	animal['name'] = n
	animal['picture'] = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg'
	animal['location'] = random.choice(location)
	animal['animal'] = random.choice(animals)
	animal['age'] = random.randint(5, 20)
	animal['breed'] = random.choice(breeds[animal['animal']])
	animal['about'] = about
	animal['favs'] = random.choice(favs)
	animalsJSON.append(animal)
	count+=1




with open('animals.json', 'wb') as outfile:
    json.dump(animalsJSON, outfile,  indent=4, sort_keys=True)