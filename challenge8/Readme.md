# --- Day 8: Treetop Tree House ---
The expedition comes across a peculiar patch of tall trees all planted carefully in a grid. The Elves explain that a previous expedition planted these trees as a reforestation effort. Now, they're curious if this would be a good location for a tree house.

First, determine whether there is enough tree cover here to keep a tree house hidden. To do this, you need to count the number of trees that are visible from outside the grid when looking directly along a row or column.

The Elves have already launched a quadcopter to generate a map with the height of each tree (your puzzle input). For example:

30373
25512
65332
33549
35390
Each tree is represented as a single digit whose value is its height, where 0 is the shortest and 9 is the tallest.

A tree is visible if all of the other trees between it and an edge of the grid are shorter than it. Only consider trees in the same row or column; that is, only look up, down, left, or right from any given tree.

All of the trees around the edge of the grid are visible - since they are already on the edge, there are no trees to block the view. In this example, that only leaves the interior nine trees to consider:

The top-left 5 is visible from the left and top. (It isn't visible from the right or bottom since other trees of height 5 are in the way.)
The top-middle 5 is visible from the top and right.
The top-right 1 is not visible from any direction; for it to be visible, there would need to only be trees of height 0 between it and an edge.
The left-middle 5 is visible, but only from the right.
The center 3 is not visible from any direction; for it to be visible, there would need to be only trees of at most height 2 between it and an edge.
The right-middle 3 is visible from the right.
In the bottom row, the middle 5 is visible, but the 3 and 4 are not.
With 16 trees visible on the edge and another 5 visible in the interior, a total of 21 trees are visible in this arrangement.

Consider your map; how many trees are visible from outside the grid?

To begin, get your puzzle input.

Answer: 
 

You can also [Share] this puzzle.




---------------------------------------------------------------------------------------------------------------




# --- Jour 8 : Treetop Tree House ---
L'expédition tombe sur une parcelle particulière de grands arbres tous soigneusement plantés dans une grille. Les Elfes expliquent qu'une expédition précédente a planté ces arbres dans le cadre d'un effort de reboisement. Maintenant, ils sont curieux de savoir si ce serait un bon emplacement pour une cabane dans les arbres .

Tout d'abord, déterminez s'il y a suffisamment de couverture arborée ici pour cacher une cabane dans les arbres . Pour ce faire, vous devez compter le nombre d'arbres visibles de l'extérieur de la grille lorsque vous regardez directement le long d'une ligne ou d'une colonne.

Les Elfes ont déjà lancé un quadricoptère pour générer une carte avec la hauteur de chaque arbre ( votre puzzle d'entrée ). Par exemple:

30373
25512
65332
33549
35390
Chaque arbre est représenté par un seul chiffre dont la valeur est sa hauteur, où 0est le plus court et 9est le plus haut.

Un arbre est visible si tous les autres arbres entre lui et un bord de la grille sont plus courts que lui. Ne considérez que les arbres de la même ligne ou colonne ; c'est-à-dire, ne regardez que vers le haut, le bas, la gauche ou la droite d'un arbre donné.

Tous les arbres autour du bord de la grille sont visibles - puisqu'ils sont déjà sur le bord, il n'y a pas d'arbres pour bloquer la vue. Dans cet exemple, cela ne laisse que les neuf arbres intérieurs à considérer :

Le haut-gauche 5est visible de la gauche et du haut. (Il n'est pas visible de la droite ou du bas car d'autres arbres de hauteur 5gênent.)
Le milieu supérieur 5est visible du haut et de la droite.
Le coin supérieur droit 1n'est visible d'aucune direction ; pour qu'il soit visible, il suffirait qu'il y ait des arbres de hauteur 0 entre lui et une arête.
Le milieu gauche 5est visible , mais uniquement de la droite.
Le centre 3n'est visible d'aucune direction; pour qu'il soit visible, il faudrait qu'il n'y ait que des arbres d'au plus haut 2entre lui et un bord.
Le milieu droit 3est visible de la droite.
Dans la rangée du bas, le milieu 5est visible , mais les 3et ne le 4sont pas.
Avec 16 arbres visibles sur le bord et 5 autres visibles à l'intérieur, un total d' 21arbres sont visibles dans cet arrangement.

Considérez votre carte; combien d'arbres sont visibles de l'extérieur de la grille ?

Pour commencer, obtenez votre entrée de puzzle .

Réponse:
 

Vous pouvez également [Partager] cette énigme.