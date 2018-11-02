import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class SwalManagerService {

  constructor() { }

  success(val = '') {
    return swal(
      val,
      '',
      'success'
    );
  }

  info(val = '') {
    return swal(
      val,
      '',
      'info'
    );
  }

  error(val = '') {
    return swal(
      val,
      '',
      'error'
    );
  }

  confirm(val = '', title = '', option?) {
    return swal({
      title: title,
      text: val,
      type: 'warning',
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
      ...option
    });    
  }

  confirmInput(val = '', title = '', inputType) {
    return swal({
      title: title,
      text: val,    
      input: inputType,  
      showCancelButton: true,
    });



  }
}

