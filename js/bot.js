import { Giant, Manipulator, Ninja, Picasso, Warrior, Wizard, Yelen } from "./classes.js";

export class Bot{
    constructor(classType, /*level,*/ player){
        this.type = classType;
        //this.level = level;
        this.adversary = player;
    }
    play(){
        if(this.type == new Wizard('Adversary')){
            if(this.type.player.x >=player.x && player.x-this.type.player.x >= player.image.width){
                this.type.player.attacking(this.adversary)
            } else {
                if (this.type.player.x > player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type == new Giant('Adversary')){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type == new Warrior('Adversary')){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type == new Picasso('Adversary')){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type == new Ninja('Adversary')){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type == new Yelen('Adeversary')){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type == new Manipulator('Adeversary')){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        };
    };
};