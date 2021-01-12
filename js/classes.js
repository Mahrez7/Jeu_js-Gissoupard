export class Player{ // Classe principale
    constructor(health, velocity, attack){
        this.health = health; //Vie du joueur
        this.max_health = health; // vie maximale, utilisée pour calculer la taille de la barre de vie
        this.velocity = velocity;//Vitesse du joueur
        this.attack = attack;//Attaque du joueur
        this.equipement = undefined;//arme du joueur
        this.level = undefined;//niveau du joueur
        this.image = new Image();//image du joueur, à définir
        this.x = undefined; //abscisse du coin supérieur gauche de l'image
        this.y = undefined; //ordonnée du coin supérieur gauche de l'image
        this.name = undefined;//Nom du joueur, indéfini pour l'instant
        this.is_jumping = false; // pour programmer les sauts
        this.power_value = this.power_time = this.level + 10; //pourcentage d'augmentation de capacité lors de l'utilisation du pouvoir et durée d'activation*/
        this.power_time_used = 0; //temps utilisé de pouvoir
        this.power_load_bar = 0;//Chargement de sa barre de pouvoir
        this.power_loaded = false;//est-ce que la barre est chargée ?
    }
    move_right(){
        this.x += this.velocity;
    };
    move_left(){
        this.x -= this.velocity;
    };
    attacking(cible){
        //this.image.src = undefined;
        if((this.x + this.image.width) - cible.x >=0 && (cible.x + cible.image.width) - this.x >=0){
            cible.health -= this.attack;
            if(this.x<cible.x){
                cible.x+= 20;
            } else{
                cible.x -= 20;
            }
        }
        //this.image.src = undefined;
    };
    use_power(capacity){//pouvoir du joueur
        capacity += this.power_value/100 * capacity
    };
    add_bar() {//augmentation du chargement du pouvoir
        this.power_load_bar ++;
        if(this.power_load_bar == 100){
            this.power_loaded = true;
        };
    };
};
export class Giant{
    constructor(name){
        this.player = new Player(250,5,15);
        this.player.name = name;
    };

};
export class Manipulator{
    constructor(name){
        this.player = new Player(100,20,10);
        this.name = name;
    };
};
export class Clown{
    constructor(name){
        this.player = new Player(100,20,10);
        this.name = name;
    };
};
export class Picasso{
    constructor(name){
        this.player = new Player(100,20,20);
        this.name = name;
    };
};
export class Yelen{
    constructor(name){
        this.player = new Player(100,20,10);
        this.name = name;
    };
};
export class Wizard{
    constructor(name){
        this.player = new Player(100,10,10);
        this.player.name = name;
    };
};
export class Warrior{
    constructor(name){
        this.player = new Player(100,10,10);
        this.player.name = name;
    };
};
export class Ninja{
    constructor(name){
        this.player = new Player(50,5,20);
        this.player.name = name;
    };
};