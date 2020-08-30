import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { utils } from '../../utils/utils';
import { HttpService } from '../../services/http.service';
import { MapQuestResponse } from '../../models/mapquestGeoCodeModel';
import { MapService } from '../../services/map.services';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Input() type: string;
  public searchForm: FormGroup

  constructor(
    public http: HttpService,
    public mapService: MapService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  submit() {
    const address = this.searchForm.get('address').value;
    const rad = this.searchForm.get('rad').value;
    this.mapService.getValuesForMap(address,rad,this.type ? this.type : 'Places');
  }

  createForm() {
    this.searchForm = new FormGroup({
      address: new FormControl('1838 Gunn Hwy, Odessa, FL 33556', [
        Validators.required,
      ]),
      rad: new FormControl(5),
    });
  }
}
