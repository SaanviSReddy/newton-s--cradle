class Ball {

constructor(x, y) {

    var options = {
        isStatic:false
    }
this.body = Bodies.circle(x, y, 50, options)
World.add(world, this.body)

}

display() {

    push()
fill("white")
circle(this.body.position.x, this.body.position.y, 100)

    pop()
}

}
