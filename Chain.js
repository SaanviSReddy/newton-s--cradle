class Chain {

    constructor(bodyA, pointB) {

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 300,
        }

        this.Sling = Matter.Constraint.create(options)
        World.add(world, this.Sling)

        this.bodyA = bodyA
        this.pointB = pointB
    }

    display() {

        push()
        stroke("yellow")
        strokeWeight(5)
        line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y)

        pop()
    }
}