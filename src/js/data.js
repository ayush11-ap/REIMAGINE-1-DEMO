let data = [
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674591/Re-Imagine/ft16neryredvzwnn4nk7.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674593/Re-Imagine/g3ld9z8lqdb6tpoygpxh.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674603/Re-Imagine/gyuhx9sd5yalqfpbyc4g.webp",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674612/Re-Imagine/sk7fhx4ruruys7jmhhqi.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674625/Re-Imagine/fkvkevnzustqmesiheva.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674646/Re-Imagine/cxvaoqydb9srjxxeqa1t.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674656/Re-Imagine/msqjp5qbxvsqflc7u3nd.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674662/Re-Imagine/zxlng2zxsifnk53buzh7.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674677/Re-Imagine/vfkrywgzcuylhaqokoi1.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674680/Re-Imagine/z8tdjg3gvvwbopmkfwr0.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674685/Re-Imagine/p3bk2apssgxyysrlrokl.jpg",
    "https://www.helpusgreen.com/cdn/shop/files/KhusDhoopSticks_1024x1024@2x.jpg?v=1704705620",
"https://www.helpusgreen.com/cdn/shop/files/AmberDhoopSticks_1024x1024@2x.jpg?v=1704705459",
"https://www.helpusgreen.com/cdn/shop/products/product-55_1024x1024@2x.jpg?v=1679403641",
"https://www.helpusgreen.com/cdn/shop/products/Patchouli_1024x1024@2x.jpg?v=1679559030",
"https://www.helpusgreen.com/cdn/shop/files/NaturalIncenseConesRajnigandhaandSandalwoodFragrance_1024x1024@2x.jpg?v=1682582511",
    "https://www.helpusgreen.com/cdn/shop/products/Cinnamon-1_1024x1024@2x.jpg?v=1679558730",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674646/Re-Imagine/cxvaoqydb9srjxxeqa1t.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674656/Re-Imagine/msqjp5qbxvsqflc7u3nd.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674662/Re-Imagine/zxlng2zxsifnk53buzh7.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674677/Re-Imagine/vfkrywgzcuylhaqokoi1.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674680/Re-Imagine/z8tdjg3gvvwbopmkfwr0.jpg",
    "https://res.cloudinary.com/ddevpn5ix/image/upload/v1719674685/Re-Imagine/p3bk2apssgxyysrlrokl.jpg",
    "https://www.helpusgreen.com/cdn/shop/files/KhusDhoopSticks_1024x1024@2x.jpg?v=1704705620",
"https://www.helpusgreen.com/cdn/shop/files/AmberDhoopSticks_1024x1024@2x.jpg?v=1704705459",
"https://www.helpusgreen.com/cdn/shop/products/product-55_1024x1024@2x.jpg?v=1679403641",
"https://www.helpusgreen.com/cdn/shop/products/Patchouli_1024x1024@2x.jpg?v=1679559030",
"https://www.helpusgreen.com/cdn/shop/files/NaturalIncenseConesRajnigandhaandSandalwoodFragrance_1024x1024@2x.jpg?v=1682582511",
"https://www.helpusgreen.com/cdn/shop/products/Cinnamon-1_1024x1024@2x.jpg?v=1679558730"

];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

data = shuffleArray(data);

export {data};
