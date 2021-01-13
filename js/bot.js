import { Giant, Manipulator, Ninja, Picasso, Warrior, Wizard, Yelen } from "./classes.js";

export class Bot{
    constructor(classType, /*level,*/ player){
        this.type = classType;
        //this.level = level;
        this.adversary = player;
    }
    play(){
        if(this.type.type == "wizard"){
            if(this.type.player.x >=player.x && player.x-this.type.player.x >= player.image.width){
                this.type.player.attacking(this.adversary)
            } else {
                if (this.type.player.x > player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type.type == "giant"){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type.type == "warrior"){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type.type == "picasso"){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type.type == "ninja"){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type.type == "yelen"){
            if(this.type.player.x <=player.x && player.x-this.type.player.x <= player.image.width){
                this.type.player.attacking(player)
            } else {
                if (this.type.player.x < player.x) {
                    this.type.player.move_right();
                } else{
                    this.type.player.move_left();
                };
            };
        } else if(this.type.type == "mainpulator"){
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
