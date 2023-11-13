class Player {

    constructor() {

        this.container = new THREE.Object3D()

        this.box = new THREE.BoxGeometry(100, 100, 100)

        this.material = new THREE.MeshPhongMaterial({
            color: 0xFF00FF,
            side: THREE.DoubleSide,
            wireframe: false,
            transparent: false,
            opacity: 1
        })

        this.player = new THREE.Mesh(this.box, this.material)

        this.container.add(this.player) // kontener w którym jest player

        this.axes = new THREE.AxesHelper(200) // osie konieczne do kontroli kierunku ruchu

        this.container.add(this.axes)

        this.container.position.set(0, 100, 0)
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

        const texture = new THREE.TextureLoader().load("../../mats/Trollface.png");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(16, 16);

        this.material = new THREE.MeshBasicMaterial({
            color: 0x8888ff,
            side: THREE.DoubleSide,
            wireframe: false,
            transparent: false,
            opacity: 1,
            map: texture,
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