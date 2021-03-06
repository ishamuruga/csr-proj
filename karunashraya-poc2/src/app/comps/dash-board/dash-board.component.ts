import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';


export interface Item {
  category: string,
  cost: number;
  name: string;
  id:string;
};


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  title = 'karunashraya-poc2';

  items!: Observable<Item[]>;

  itemsArray:any=[];

  bDisplay: boolean = false;

  public cost!: number;
  public category!: string;
  public name!: string;
  public id!:string;
  

  constructor(private store: AngularFirestore) {
    //this.items = store.collection("item").valueChanges() as Observable<Item[]>;
    //this.items.forEach(console.log);
    this.itemsArray = this.getAll();

    //this.getAll().subscribe(itm=>{
    //  console.log(itm);
    //  this.itemsArray.push(itm);
    //}) 
    //console.log(this.getAll());
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  display(val: string) {
    if (val == "add") {
      this.bDisplay = true;
    } if (val == "clear") {
      this.bDisplay = false;
    }
  }

  add() {
    console.log(this.cost);
    console.log(this.name)
    console.log(this.category);
    this.store.collection("item").add(
      {
        name: this.name,
        cost: this.cost,
        category: this.category
      }
    );
  }

  getAll(){
    console.log("=======================IDs")

    let itemsCollection = this.store.collection('item');

    return itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data as {} };
      });
    }));// .subscribe(console.log);



    // this.store.collection('item').snapshotChanges().subscribe((response) => {
    //   console.log(response);
    //   this.dataSource = response.map(item => {
    //     return Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
    //   });
    // })
  }


}
