import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean = false;
  addRestaurants = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto: CommonService) { }

  ngOnInit(): void {
  }
  createResto() {
    //console.log(this.addRestaurants.value)
    this.resto.addResto(this.addRestaurants.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurants.reset({});
      console.log("Get the data Service", result);
    })
  }
  closeAlert(){
    this.alert = false;
  }
}
