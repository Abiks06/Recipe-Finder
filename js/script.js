const recipes = [
  {
    id: 1,
    name: "Classic Lasagna",
    ingredients: [
      "1 tbsp olive oil",
      "1 cup carrot, finely chopped (1 large)",
      "1 cup stalk celery, finely chopped (1 large)",
      "1 cup white onion, finely chopped (1 large)",
      "1 lb ground beef (mince), (500g)",
      "1 lb ground pork (mince), (500g)",
      "2.5 cups Passata (tomato puree US), (540g)",
      "3 tbsp tomato paste",
      "1 cups red wine, (250ml)",
      "6 cups beef stock, (1.5 litres)",
      "2 bay leaves",
      "1 tsp sea salt flakes and pepper",
      "5 tbsp butter, (70g)",
      "5 tbsp flour all-purpose, (70g)",
      "4 cups full fat milk, (1 litre)",
      "1/2 tsp nutmeg",
      "1 cup parmesan, freshly grated (70g)",
      "1 tsp sea salt salt and pepper, or to taste",
      "1 lb fresh lasagna pasta sheets, (17 oz/500g)",
      "2 balls mozzarella, (8 oz/250g)",
    ],
    instructions:
      "1. Ragu: Finely chop the carrot, onion and celery and saute the vegetables gently in a large frying pan with the olive oil. Once the vegetables are soft add the beef and pork mince and cook until browned. 2. If there is a lot of excess fat in the pan, spoon some out. Add the red wine and reduce by half. 3. Once the wine has reduced, add the passata (tomato puree), tomato paste, bay leaves, 4 cups of beef stock (1 litre) and a pinch of salt and pepper. 4. Stir everything together and leave to simmer on a low heat for 2.5-3 hours uncovered. Add the rest of the beef stock half way through. 5. White Sauce: Add the butter to a saucepan and cook until melted and bubbling. 6. Add the flour to the melted butter and stir to form a paste. Let the flour cook for 1 minute. 7. Slowly whisk half of the milk into the butter and flour constantly whisking to avoid any lumps. Once it has started to thicken add the rest of the milk, nutmeg, parmesan and a pinch of salt and pepper. 8. Continue to heat the sauce whilst stirring until thickened enough to coat the back of a wooden spoon. Take off the heat and set aside. 9. Assemble the lasagne: Preheat the oven to 350F (180C). 10. To assemble the lasagne, spoon a small amount of ragu on the very bottom of the baking dish. Top with and even layer of lasagna pasta sheets (cut the pasta sheets to fit your baking dish). 11. Add a few more spoons of ragu so the pasta is completely covered followed by 2 ladels of white sauce. 12. Repeat the layers of pasta, ragu and bechamel sauce until everything is used up making sure to keep enough of bechamel sauce for the very top layer (you should have 4-5 layers of pasta). 13. Cover the top layer of the lasagne with torn mozzarella and then bake in the oven for 45minutes or until bubbling and golden. 14. Let it cool slightly for 5-10 minutes before serving.",
    imageURL:
      "https://www.modernhoney.com/wp-content/uploads/2025/01/Classic-Lasagna-5-scaled.jpg",
  },
  {
    id: 2,
    name: "Ghanaian Jollof Rice",
    ingredients: [
      "2 large yellow onions, roughly chopped",
      "⅓ cup vegetable oil (80 mL), plus 2 tablespoons, divided",
      "14 oz diced tomato (395 g), 2 cans",
      "6 oz tomato paste (170 g), 1 can",
      "1 habanero pepper",
      "2 teaspoons curry powder",
      "1 teaspoon garlic powder",
      "1 teaspoon ground ginger",
      "½ teaspoon mixed dried herbs",
      "3 chicken bouillon cubes, crushed",
      "2 ½ cups long grain rice (500 g), rinsed",
      "1 cup frozen mixed vegetable (150 g)",
      "1 ½ cups water (360 mL)",
    ],
    instructions:
      "1. Add onions and 2 tablespoons of oil to a blender and pulse until smooth. Transfer to a medium bowl. 2. Add the diced tomatoes, tomato paste, and habanero pepper to the blender, and pulse until smooth. Transfer to a separate medium bowl. 3. Heat the remaining ⅓ cup (80 ml) of oil in a large, heavy-bottomed pot over medium heat. 4. Once the oil is shimmering, add the onion puree and cook until the water has cooked out and the puree is starting to brown, about 10 minutes. 5. Stir in the tomato puree and add the curry powder, garlic powder, ginger, dried herbs, and crushed bouillon cubes. Cook for 20-30 minutes, stirring occasionally, until the stew has reduced by half and is deep red in color. 6. Add the rice, mixed vegetables, and water. Bring to a boil, then reduce the heat to low and cover the pot with foil and a lid. Simmer for another 30 minutes, until the rice is cooked through and the liquid is absorbed. 7. Enjoy!",
    imageURL:
      "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16-500x500.jpg",
  },
  {
    id: 3,
    name: "Pancakes Delight",
    ingredients: [
      "1 ½ cups all-purpose flour",
      "3 ½ teaspoons baking powder",
      "1 tablespoon white sugar",
      "¼ teaspoon salt, or more to taste",
      "1 ¼ cups milk",
      "3 tablespoons butter, melted",
      "1 large egg",
    ],
    instructions:
      "1. Gather all ingredients. 2. Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth. 3. Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. 4. Flip and cook until browned on the other side. Repeat with remaining batter. 5. Serve and enjoy!",
    imageURL:
      "https://www.acouplecooks.com/wp-content/uploads/2024/08/Brown-Butter-Pancakes-0002.jpg",
  },
  {
    id: 4,
    name: "Chicken Tacos",
    ingredients: [
      "2 teaspoons chili powder",
      "¾ teaspoon kosher salt, divided",
      "½ teaspoon garlic powder",
      "½ teaspoon onion powder",
      "½ teaspoon cayenne",
      "1½ pounds boneless, skinless chicken thighs",
      "1 tablespoon vegetable oil (or another neutral oil)",
      "1½ cups diced yellow onion",
      "½ packed cup cilantro, diced",
      "1 tablespoon diced jalapeño",
      "Juice from one medium lime",
      "20 mini corn tortillas",
      "Lime wedges, for serving",
    ],
    instructions:
      "1. In a small bowl whisk together the chili powder, ½ teaspoon of the salt, garlic powder, onion powder and cayenne until combined then season the chicken thighs on all sides. 2. Heat a medium sauté pan or cast iron skillet over medium heat, add the oil and heat through. Cook the chicken until cooked through on both sides and lightly browned, about 8 minutes total. 3. Remove to a cutting board and let rest for about 10 minutes. Chop the chicken into bite-sized pieces and set aside. 4. In a medium bowl stir together the onion, cilantro and jalapeño. Season with lime juice and remaining salt. 5. Heat a large skillet or griddle over medium heat and top two mini tortillas on top of each other then warm the tortillas on both sides. Repeat with remaining tortillas. 6. To serve, top the warmed tortillas with a spoonful of the chicken and the onion mixture. Serve with extra lime wedges on the side.",
    imageURL:
      "https://diethood.com/wp-content/uploads/2025/03/pulled-chicken-tacos-3.jpg",
  },
  {
    id: 5,
    name: "Japanese Sushi Rolls",
    ingredients: [
      "2¼ cups uncooked Japanese short-grain white rice",
      "2¼ cups water",
      "1 piece kombu (dried kelp)",
      "⅓ cup rice vinegar (unseasoned)",
      "3 Tbsp sugar",
      "1½ tsp Diamond Crystal kosher salt",
      "1 Japanese or Persian cucumber",
      "7 oz sashimi-grade tuna block",
      "1 box natto (fermented soybean)",
      "¼ cup water",
      "2 tsp rice vinegar (unseasoned)",
      "5 sheets nori (dried laver seaweed)",
    ],
    instructions:
      "1. Gather all the ingredients. Please cook the rice ahead of time following my Sushi Rice recipe. The cook time varies depending on the device/method you use. You will need a bamboo sushi mat. 2. Use 2¼ cups uncooked Japanese short-grain white rice, 2¼ cups water, and 1 piece kombu (dried kelp) to cook the rice. This yields 6⅔ cups of cooked rice, enough for 10 hosomaki or thin sushi rolls. Please follow my Sushi Rice recipe for step-by-step instructions on how to cook the rice. 3. Use ⅓ cup rice vinegar (unseasoned), 3 Tbsp sugar, and 1½ tsp Diamond Crystal kosher salt to season the cooked rice as described in my Sushi Rice recipe. Cover the sushi rice with a damp cloth/plastic wrap at all times to prevent drying. 4. Cut both ends of 1 Japanese or Persian cucumber. Cut in half lengthwise, then cut the halves again lengthwise so you now have 4 strips. Remove the seeds with your knife. Then, cut each strip in half lengthwise yet again. You now have 8 strips. 5. Cut the 7 oz sashimi-grade tuna block lengthwise into ¼- to ½-inch slabs. Then, cut the slabs lengthwise into long strips ¼- to ½-inch thick. 6. Remove the natto from 1 box natto (fermented soybean) and place in a small bowl. Season with the packet of soy sauce or seasoning that came with the package. Mix everything up and stir several times until it’s slimy and bubbly. 7. Make finger-dipping vinegar water (tezu) by combining ¼ cup water and 2 tsp rice vinegar (unseasoned) in a small bowl. Apply this water to your fingers and hands to prevent the rice from sticking to them. 8. Cut 5 sheets nori (dried laver seaweed) in half. Even though it may look it, nori sheets are not perfectly square; therefore, cut the longer side of the rectangle in half. Also, nori gets stale easily, so store the sheets in an airtight bag and take out each piece only when you‘re ready to use it. 9. Place the sushi mat on a work surface. The bamboo slats should run sideways (horizontally) so you can roll them up. On the mat, place a nori half sheet shiny side down, with its long side along the bottom edge of the mat (the side closest to you). Leave about 3–4 slats visible on the side nearest you. 10. Moisten your hand with tezu before you touch the sushi rice. 11. Using a measuring cup, scoop ½ cup (80 g) of sushi rice into your hand. This way, you‘ll use the same the amount of rice for each roll and they will be the same size. You can wet the measuring cup with tezu so the rice won‘t stick. I know, this is not the “proper” way, but until you can grab a perfect amount of rice each time, this trick will do! 12. Place the sushi rice on the nori, left of center. Leaving a 1-inch strip of nori along the top edge, spread the rice toward the right using your right fingers while you use your left fingers to keep the rice away from the 1-inch nori strip on top. 13. Spread the rice evenly with both fingers, still keeping the 1-inch space on the top. Wet your fingers in dipping water if the rice starts to stick. 14. Place a single filling of your choice (tuna, cucumber, or natto) in the middle of the rice across the entire length of the roll. If your tuna or cucumber is too short, add extra pieces on the end. Hold the filling down using your fingers. 15. Lift up the bottom edge of the sushi mat with your thumbs. With one swift movement, roll the nori and rice over the filling. Land right at the top edge of the rice. You should still see the 1-inch nori space. 16. Leaving the sushi mat in place, gently shape and tighten the roll with your fingers from outside of the mat. Shape the roll to give it square sides (or keep it round). Finally, lift the sushi mat and rotate the roll once to seal the top edge of nori. Gently squeeze and tighten the roll again through the mat. Your sushi roll is now done. Move the completed roll to a tray or platter and keep it covered with a damp cloth/plastic wrap at all times to prevent drying. Continue rolling the rest of the rolls. 17. To cut a sushi roll, wet your knife with a damp towel and cut the roll in half first. You should “push, then pull” the knife while cutting through the sushi. Wet the knife again and cut each half roll into 3 pieces. Serve with soy sauce, wasabi, and sushi ginger (gari). Enjoy!",
    imageURL:
      "https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1117-I.jpg",
  },
  {
    id: 6,
    name: "Spaghetti Carbonara",
    ingredients: [
      "350 g (12 oz) spaghetti",
      "200 g (7 oz) guanciale",
      "4 eggs (1 egg per serving)",
      "100 g (~1 cup) Pecorino Romano, grated",
      "ground black pepper, to taste",
    ],
    instructions:
      "1. First, bring a pot of water to a boil while you get the carbonara sauce ready. 2. Cut the guanciale into small pieces—cubes, slices, whatever you prefer. Cook it in a skillet over medium heat for 2-3 minutes, stirring occasionally so it cooks evenly. Once the guanciale is ready, turn off the heat, and set it aside. 3. Now, let's make the pecorino cream. In a bowl, whisk together the eggs and Pecorino Romano cheese. 4. Add some freshly ground black pepper. Then, mix quickly with a fork - or a hand whisk - until you have a creamy sauce. Set it aside for now. 5. Meanwhile, add salt to the water and cook the spaghetti al dente, following the cooking time on the pasta package. 6. Using a spoon for spaghetti, drain the pasta when ready. Then place them in the skillet, OVER HIGH HEAT, to season well with the guanciale. 7. When the spaghetti and guanciale are sizzling in the pan, TURN OFF THE HEAT—otherwise, the eggs will cook too much, and you'll end up with scrambled eggs instead of a creamy carbonara! Right away, pour the egg and pecorino mixture over the hot pasta and stir quickly. Since the pan is no longer on the heat, the eggs will cook gently, creating a smooth and creamy texture without lumps. Keep an eye on the consistency—it should be velvety, not too runny. 8. With the help of a ladle and a fork, create a pasta nest and place it on a plate. 9. Add the guanciale (what's left in the pan), freshly ground black pepper and grated pecorino romano to taste. Serve and enjoy!",
    imageURL:
      "https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg",
  },
  {
    id: 7,
    name: "Ghanaian Banku & Tilapia",
    ingredients: [
      "2 medium onions, chopped",
      "1-2 scotch bonnet peppers, deseeded and chopped",
      "1 can tomatoes, unseasoned",
      "Fine salt, to taste",
      "1-2 tbp granulated white sugar, to taste",
      "2 Cups corn dough",
      "1 Cup cassava dough",
      "1 tsp fine salt",
      "1.5-2 cups water, room temperature",
      "1-2 whole tilapia fish, gutted, cleaned, and scaled",
      "2-3 tbsp olive oil",
      "2 garlic cloves, minced",
      "Handful Fresh herbs of your choice (parsley, dill, or thyme work well)",
      "2 lemons",
      "Sea salt, to taste",
      "Freshly ground black pepper, to taste",
      "1 medium red onion, sliced",
      "1 green bell pepper, deseeded and sliced",
      "1 red bell pepper, deseeded and sliced",
    ],
    instructions:
      "1. For the hot pepper sauce: First, preheat your oven to 400ºF (200ºC). Line a baking or roasting tray with non-stick baking paper. 2. Start by making your pepper sauce. Combine all of the ingredients (except for the salt) inside a blender or food processor. Then, pulse the ingredients until they are chunky. Do not blend them! 3. Remove the chunky hot pepper sauce from the blender and place it inside a small sauce pan. Then, bring the sauce to a boil. 4. Once boiling, reduce the heat and allow it to simmer for 10 minutes. Adjust the flavor with salt and sugar until you like it. 5. Remove it from the heat and set it aside. 6. For the roasted whole tilapia: To start, if you haven't already, prepare the whole tilapia. Make sure the inside is clean and that the scales and fins are removed. Then, pat the fish dry before you garnish and roast it. 7. Place the tilapia fish inside the roasting tray. Then, score the surface of the fish by making two or three incisions on each side. 8. Next, brush the entire fish well with olive oil. It includes both sides as well as the cavity of the fish. 9. Then, spread the minced garlic inside the cavity and stuff in the fresh herbs. Next, slice one of the lemons and place the slices on the herbs inside the fish. 10. Squeeze some lemon juice over the surface of the tilapia. Finally, add sea salt and freshly ground black pepper on onto both sides of the fish. 11. Roast the tilapia for 15-25 minutes, depending on its size. The internal temperature of the tilapia should be 145ºF (62ºC). 12. For the banku: While your tilapia is roasting, make the banku. Start by mixing together the corn dough, cassava dough, and salt in a saucepan or pot. 13. Once mixed, place it over high heat and allow it to cook. As it cooks, add some more water and stir continuously. Keep adding water until the mixture comes together. It shouldn't be firm, but it should be solid dough. 14. Lower the heat to medium-low. Add a lid on the pot and allow the banku to steam for 5 minutes. 15. Then, remove it from the heat and give it one final stir. Then, place large scoops of banku dough into a damp bowl and roll it until it is shaped nicely. 16. Assemble the banku with tilapia fish: To serve this dish, first, place the roasted fish on a large serving platter. Then, drizzle some more lemon juice over it. Place the banku balls around the fish, or serve it separately. 17. Drizzle some hot pepper sauce over the cooked tilapia and garnish it with sliced vegetables and more herbs.",
    imageURL:
      "https://keeshaskitchen.com/wp-content/uploads/2022/10/Banku-with-tilapia.jpg",
  },
  {
    id: 8,
    name: "French Croissants",
    ingredients: [
      "85 g milk (⅓ cup) lukewarm",
      "60 g water (¼ cup) lukewarm",
      "6 g active dry yeast (about 2 tsp)",
      "5 g honey (1 tsp) malt syrup, OR use sugar if you have neither",
      "25 g butter (1 ½ tbsp) melted and cooled",
      "20 g white sugar (generous 1 ½ tbsp)",
      "250 g AP flour (2 cups, spoon and leveled)",
      "5 g salt (about 1 tsp)",
      "140 g butter (10 tbsp)",
      "1 egg yolk",
      "2 tbsp milk and/or cream",
    ],
    instructions:
      "1. Détrempe: Dissolve the honey in the milk in a mixing bowl, and then whisk in the yeast. Set aside for the yeast to activate for about 10 – 20 minutes. 2. Add the rest of the ingredients into the bowl in the order listed in the ingredients list. Stir with a spatula or spoon to mix it into a scraggly dough. 3. Using your hand, knead the dough for about 1 – 2 minutes until a scraggly dough is formed. 4. Take the dough out of the bowl and knead it on a work surface until smooth – about 4 minutes. You shouldn’t have to put too much effort into kneading here because it isn’t a very stiff dough. Place the dough back in the mixing bowl and cover with plastic wrap. 5. Keep the bowl in a warm place, and proof until at least doubled in size (this can take about 1 hour). 6. After the first proof, turn the dough out onto a lightly floured surface and flatten it to knock out the air. Transfer the dough onto the second (larger) parchment paper and shape it into a rectangle. Fold the other half of the parchment paper over the dough, forming a 7 x 10 inch case. Use a rolling pin to roll out the dough to fit the 7 x 10 inch rectangle. (It doesn’t have to fill the 7 x 10 inch rectangle perfectly, just as closely as possible). 7. Cover the parchment paper encased dough well in plastic wrap, and place it in a quarter sheet pan. Freeze for at least a few hours, or overnight. 8. Tourrage (butter block): Slice the cold butter into thin slices. 9. Arrange them on the 1st parchment paper (the smaller one), within the 5 x 6.5 inch marked rectangle (see picture in the post). Fold the parchment paper over to enclose the butter. 10. Using a rolling pin, firmly hit the butter to make it more pliable. Then, using the rolling pin, roll out/spread the butter inside the parchment paper. 11. Make sure to roll the butter out into the corners, but also keep the butter evenly thick. 12. Transfer this butter block into the fridge until completely hardened (or overnight). 13. Enclosing the butter: IMPORTANT – when laminating the butter and dough, it’s REALLY crucial that they both have similar pliability and are cold. If my dough is frozen solid, I keep it at room temp. for about 30 minutes to let it soften slightly, before starting the lamination process. 14. The butter block is removed from the fridge just before lamination, but made pliable by knocking a rolling pin against it repeatedly. It should remain cold. 15. Remove the parchment paper from the dough and place it on an un-floured (or very lightly floured) work surface. If it’s not quite a 7 x 10 inch rectangle, roll it out to the correct size, making sure it’s still evenly thick. 16. Unwrap the parchment paper from the butter block, but keep the butter still attached to the parchment paper. 17. Place the butter block on one half of the dough. There should be a very small border around the butter block and it should still have the parchment paper on top. Once the butter is correctly in place, pat it onto the dough to let it “bind” to the dough. Carefully peel off the parchment paper. 18. Fold the dough over the butter, end to end, completely enclosing the butter. Press the edges to seal the butter inside the dough. Pat the dough again to help the butter “bind” to the dough. 19. The dough should still be very cold. If it isn’t, wrap it and put it back in the fridge for about 30 minutes. 20. First lamination – double fold: Generously flour your work surface and dough. Place the dough on the work surface and using the rolling pin, gently press, along the length of the dough, to make sure the butter is pliable. 21. While maintaining the 5 inch (12.7 cm) width (short end), roll out the dough to a length of approximately 16 inches (40 cm). 22. Use flour as needed to make sure the dough doesn’t stick to the counter, and use your hands to keep the width even and straight. (You can also gently lift the dough as you roll to make sure it isn’t sticking to the countertop). 23. Work quickly to keep the dough and butter cold. If the butter softens too much, return the dough to the fridge or freezer. 24. Brush off excess flour on the work surface using a large pastry brush. Trim just a little piece of dough along the edges, to make the width straight. 25. Fold in about 1/8th of the dough towards the middle (about 2 – 3 inches). Then bring the other end to meet the folded end. Make sure the two ends are as close together as possible with no gaps. Using a paring knife, make small cuts at the four corners of the folds to release the tension (4 cuts; please see pictures in the post). 26. Brush off excess flour on the surface of the dough. Now, fold the dough in half. Firmly tap the dough to keep the shape. Again, make cuts at the corners of the fold (2 cuts). 27. Wrap the dough with plastic wrap and refrigerate for at least 30 minutes (60 minutes is even better). 28. Second lamination – single fold: Generously flour the work surface and place the dough on it. Gently press into the dough with a rolling pin along the length of it to make sure the butter inside is pliable. 29. Keeping the short end as the width (4 inches / 10 cm), roll out the dough to 15 inches (38 cm). As you roll out the dough, make sure the final width is kept to about 5 inches. Also make sure the dough isn’t sticking to the work surface, and the width is straight and even. 30. Brush off excess flour from the surface of the dough using a pastry brush. 31. Fold in ⅓ of the dough towards the center (about 5 inches / 12.7 cm). As before, cut the corners of the fold with a paring knife to release tension. 32. Brush off excess flour again, and fold the other edge of the dough OVER the first fold. Cut the folded corners with a paring knife to release tension. 33. Wrap the dough in plastic wrap and refrigerate for another 30 minutes (preferably 60 minutes). 34. Sheeting the dough: Place the dough on a well-floured surface – the edge where you can see all the folds should be facing you. 35. Gently press the dough with a rolling pin along the length of it to make the dough and butter pliable. 36. Roll out the dough to about a 1 cm thickness (with an 8 – 9 inch width at the edge facing you). 37. Wrap the dough and refrigerate for about 30 – 45 minutes to allow the gluten to rest. 38. Roll out the rested dough to about a 4 – 5 mm thickness. Use flour to make sure the dough doesn’t stick to the surface. 39. I like to keep a width of about 9.5 – 10 inches (23 – 24 cm) and roll it out to a 4 – 5 mm thickness. Again, make sure the dough isn’t sticking to the work surface BEFORE you starting cutting the dough in the next step. 40. If, at any point, the dough becomes too soft or starts to shrink, wrap it and return it to the fridge for at least 30 minutes. 41. Cutting the dough: Cut a very thin strip along the long edges of the dough to have a width of 9 inches / 23 cm. Make sure the edges are straight and even. Use a pizza cutter or a sharp knife. Avoid dragging the knife along the dough as you cut it, as this can distort the dough. Simply press the knife or pizza cutter straight down to cut. 42. Along one of the long edges, make 3.5 inch / 9 cm markings. Then make 9 cm markings on the opposite edge as well, BUT these markings will be halfway between the markings along the first edge. 43. Use the ruler and a small sharp knife to connect the markings on the two sides with straight lines. 44. Using the marked lines as a guide, cut the dough with a pizza cutter or a sharp, long knife. You should end up with about 6 triangles, and a leftover piece. 45. Rolling up the croissant + proofing: Brush off excess flour from both sides of the dough triangle and keep it on the work surface. 46. Make a 1 cm cut at the mid point along the base of the triangle. Roll up the base, while gently pulling at the two corners to make the base slightly wider. (The cut that was made along the middle of the base helps with this.) 47. Once you have rolled up the base once, then you can roll up the croissant the rest of the way more easily. Make sure the tip of the triangle is properly centered the whole way. 48. Also make sure not to roll out the croissant too tightly or too loosely. 49. Place the rolled up croissant dough on the lined half sheet baking pan (6 on a tray), while making sure the tip of the croissant triangle is placed under the croissant. Gently press on the croissant to seal the tip at the bottom into the dough (take care not to squash the croissant!). 50. Cover with plastic wrap, and another half sheet pan on top. Make sure there's plenty of space within the baking pans so that proofed croissants don’t stick to the half sheet pan on top. 51. Proof the croissants (somewhere that is about 25°C / 77°F) until doubled in size. The time can vary depending on the weather. I proof mine inside an oven with just the light turned on, and it still takes me between 2 – 3 hours. 52. The croissants have proofed if they have doubled in size, look very pillowy, and will jiggle a little when you give the sheet pan a shake. 53. Preheat the oven to 375°F /190°C, at least 30 minutes before baking the croissants. 54. Baking the croissants: Mix the egg yolk and milk together to form the egg wash. 55. Brush with an egg wash (use a soft, small pastry brush, because the croissants are very delicate at this stage). Bake at 375°F / 190°C (conventional oven) for about 20 – 30 minutes until golden brown. Turn the tray once halfway through the baking time, if needed. 56. Remove from the oven and let them cool for a few minutes before transferring the croissants onto a cooling wire rack. Then let them cool down further to allow the insides to set (otherwise the croissants will be too soft).",
    imageURL: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
  },
  {
    id: 9,
    name: "Nigerian Egusi Soup",
    ingredients: [
      "2 Cups Egusi melon",
      "1 Cup Palm Oil or a little more or less depending on preference",
      "4 tablespoon Crayfish",
      "3 tablespoon locust beans",
      "24 oz chopped spinach",
      "1 Red Bell Pepper",
      "1 Habanero Pepper",
      "1 Fresno Pepper",
      "2 Onions",
      "Stock Cube Optional",
      "1 lb Beef Tripe, Dry Fish, Cow Leg",
      "Salt To Taste",
      "3 cups Beef stock Chicken stock works just as well",
    ],
    instructions:
      "1. Blend the peppers and onions together until smooth and set aside. 2. Blend the Egusi melon, half of the second onion, and crayfish together. Set aside as well. 3. Heat the palm oil in a pan and allow it to melt over medium heat but don't overheat the oil. Add the remaining half onion (diced) and half of the locust bean. Let it cook for about 3 minutes on medium heat. 4. Add the blended pepper and cook till the water is reduced this should take about 15 minutes on medium heat stirring about every 5 minutes to prevent burning. 5. Add the remaining locust bean, beef stock, and salt to taste. Cover and leave to cook for another 5 minutes 6. Gently introduce the blended egusi inside the sauce but don't stir it at this point. Just cover it and leave it to cook for about 20 to 30 minutes Keep an eye on it so it doesn't burn but try not to stir it until the Egusi turns into a soft compact mass. Then, gently stir together and add more stock or water if necessary. 7. Add the fish and meat and leave to cook again for another 5 minutes. 8. Stir in the spinach and leave to simmer for about 5 minutes (stir constantly). Adjust the seasoning if necessary. 9. Serve while still hot.",
    imageURL:
      "https://lowcarbafrica.com/wp-content/uploads/2018/06/Egusi-Soup-IG-1.jpg",
  },
];

const recipesSection = document.getElementById("recipes-section");
const detailSection = document.getElementById("recipe-detail");
const searchInput = document.getElementById("search-input");

function displayRecipes(filteredRecipes = recipes) {
  recipesSection.innerHTML = "";
  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.imageURL}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
    `;
    card.addEventListener("click", () => showRecipeDetail(recipe));
    recipesSection.appendChild(card);
  });
}

function showRecipeDetail(recipe) {
  recipesSection.classList.add("hidden");
  detailSection.classList.remove("hidden");
  const steps = recipe.instructions
    .split(/\d+\.\s+/)
    .filter((step) => step.trim() !== "");
  detailSection.innerHTML = `
    <img src="${recipe.imageURL}" alt="${recipe.name}">
    <h2>${recipe.name}</h2>
    <h4>Ingredients:</h4>
    <ul>${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
    <h4>Instructions:</h4>
    <ol>
      ${steps.map((step) => `<li>${step.trim()}</li>`).join("")}
    </ol>
    <button id="back-btn">Back to Recipes</button>
  `;
  document.getElementById("back-btn").addEventListener("click", () => {
    detailSection.classList.add("hidden");
    recipesSection.classList.remove("hidden");
  });
}

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(term) ||
      r.ingredients.some((i) => i.toLowerCase().includes(term))
  );
  displayRecipes(filtered);
});

// Initial load
displayRecipes();
