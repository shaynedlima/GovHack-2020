/*
columns are age brackets
[<18, 18-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50-54, 55-59, 60-64, 65-69, 70-74, 75+]

rows are income brackets
a. $18,200 or less
b. $18,201 to $37,000
c. $37,001 to $87,000
d. $87,001 to $180,000
e. $180,001 or more

*/

const median = [[218, 893, 4220.5,	14050.5, 24563.5,	32743.5, 39582, 45656.5, 62060, 140897,	272347.5, 276766.5, 188741.5],
[1299, 3885, 9569, 18885, 28684.5, 37451.5, 45414, 54997, 73032.5, 105045.5, 145830, 185190, 155186],
[3014, 11515, 25591, 44037, 62674, 80083, 96402, 113099, 136006, 156636, 169983, 234170, 302287],
[10853, 16492, 46624, 77835, 114056, 152008, 191468, 236722, 294607, 349273, 410292, 579115, 654138],
[20766, 6931, 52895, 108952, 166696, 231523, 308285, 411255, 569072, 816497, 1021877, 1245259, 1259708]]

const max = [[265, 926, 4886, 16018, 25597, 34597, 45698, 53843, 70741, 153549, 273103, 287182, 194374],
[1480, 4042, 10854, 22572, 32927, 38786, 46813, 58280, 77767, 112336, 153022, 190888, 165593],
[3169, 11646, 25930, 45220, 63891, 82221, 102769, 122389, 146524, 164446, 169995, 246254, 312854],
[18273, 22340, 48582, 80154, 115460, 155567, 198743, 244881, 307104, 356512, 443566, 649387, 665255],
[38586, 10418, 65597, 117364, 175727, 244928, 322471, 426415, 590476, 830835, 1055104, 1263161, 1356455]]

const min = [[171, 860, 3555, 12083, 23530, 30890, 33466, 37470, 53379, 128245, 271592, 266351, 183109],
[1118, 3728, 8284, 15198, 24442, 36117, 44015, 51714, 68298, 97755, 138638, 179492, 144779],
[2859, 11385, 25253, 42855, 61458, 77945, 90036, 103809, 125488, 148827, 169972, 222086, 291721],
[3433, 10644, 44667, 75516, 112653, 148449, 184193, 228563, 282111, 342035, 377019, 508844, 643021],
[2947, 3444, 40193, 100540, 157665, 218119, 294099, 396095, 547668, 802159, 988651, 1227357, 1162961]]

const SUPER_DATA = {min, max, median};