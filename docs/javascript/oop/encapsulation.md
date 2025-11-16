# Encapsulation

Owner: Hasibul Huda

Encapsulation is the idea of encapsulating data and code that work on that data together. In OOP encapsulation is achieved through classes and its attributes and methods.

```jsx
class Band{
  constructor(_name, albums){
    this.name = _name,
    this.albums = albums
  }

  printName(){
    console.log(this.name)
  }

  printAlbums(){
    console.log("Albums of " +this.name);

    for(let album of this.albums){
      console.log(album)
    }
    console.log()
  }

  addAlbum(album){
    this.albums.push(album)
  }
}

let band1 = new Band("Pink Floyd", [
  "The Wall", "The Dark Side of the Moon"
])

band1.printName()
band1.printAlbums()

band1.addAlbum("Wish You Were Here")

band1.printAlbums()
```

We create a class named `Band`. It has two attributes, `name` and `albums`. It also has three methods. `printName` and `printAlbum` works as a getter while `addAlbum` is a setter. This is a simple example of encapsulation where the data and the method that works on the data lives in the same