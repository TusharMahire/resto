import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  editRestaurants = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private resto: CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {
      this.editRestaurants = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        mobile: new FormControl(result['mobile']),
        email: new FormControl(result['email'])
      })
    })
  }
  updateResto() {
    this.resto.updateResto(this.router.snapshot.params.id, this.editRestaurants.value).subscribe((result) => {
      console.log(result, "Data updated Successfully");
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
  }
}