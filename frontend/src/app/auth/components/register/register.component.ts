import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';
import { AuthService} from '../../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authModel:any={};
  constructor(private authService:AuthService,
    private readonly toastr:ToastrService) { }

  ngOnInit(): void {
  }
  register(){
    this.authService.register(this.authModel).subscribe((res:any)=>{
      this.toastr.success('registered')
      
    },(err:any)=>{
      
      this.toastr.error(`${err.error.message}`)
    }
    
    )
  }

}
