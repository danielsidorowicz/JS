class Player {

    constructor() {

        this.container = new THREE.Object3D()

        this.box = new THREE.BoxGeometry(50, 50, 50)

        this.material = new THREE.MeshNormalMaterial({})

        this.player = new THREE.Mesh(this.box, this.material)

        this.container.add(this.player) // kontener w którym jest player

        this.axes = new THREE.AxesHelper(200) // osie konieczne do kontroli kierunku ruchu

        this.container.add(this.axes)

        this.container.position.set(0, 50, 0)
    }



    //funkcja zwracająca cały kontener

    getPlayerCont() {
        return this.container
    }

    //funkcja zwracająca playera czyli sam sześcian

    getPlayerMesh() {
        return this.player
    }

}

class Plane {
    constructor() {

        this.container = new THREE.Object3D()

        this.flat = new THREE.PlaneGeometry(1000, 1000)

        this.material = new THREE.MeshBasicMaterial({
            color: 0x8888ff,
            side: THREE.DoubleSide,
            wireframe: false,
            transparent: true,
            opacity: 1
        });

        this.plane = new THREE.Mesh(this.flat, this.material)

        this.plane.rotation.x = Math.PI / 2;

        this.container.add(this.plane) // kontener w którym jest player
    }



    //funkcja zwracająca cały kontener

    getPlaneCont() {
        return this.container
    }

    //funkcja zwracająca playera czyli sam sześcian

    getPlaneMesh() {
        return this.plane
    }
}

class Ally {
    constructor() {

        this.container = new THREE.Object3D()

        this.sphere = new THREE.SphereGeometry(15, 32, 16)

        this.material = new THREE.MeshBasicMaterial({
            color: 0x00FF00,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });

        this.ally = new THREE.Mesh(this.sphere, this.material)


        this.container.add(this.ally) // kontener w którym jest player
    }



    //funkcja zwracająca cały kontener

    getAllyCont() {
        return this.container
    }

    //funkcja zwracająca playera czyli sam sześcian

    getAllyMesh() {
        return this.ally
    }
}