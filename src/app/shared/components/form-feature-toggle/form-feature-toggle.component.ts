import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// Interfaces
import { IFeatureToggle } from 'src/app/core/interface/feature-toggle.interface';

// Services
import { FeatureToggleService } from 'src/app/core/services/featureToggleService.service';

@Component({
  selector: 'app-form-feature-toggle',
  templateUrl: './form-feature-toggle.component.html',
  styleUrls: ['./form-feature-toggle.component.scss'],
})
export class FormFeatureToggleComponent implements OnInit {
  @Output() public outputAddFormFeatureToggle = new EventEmitter();
  @Input() public addFormFeatureToggle!: IFeatureToggle | any;

  public cloneAddFormFeatureToggle!: IFeatureToggle;

  public environmentItens: Array<string> = ['dev', 'hml', 'prod'];
  public validateInputForm!: boolean;

  public nextForm: Array<{
    textTitle?: string;
  }> = [
    {
      textTitle: 'Nome do Projeto',
    },
    {
      textTitle: 'Ambientes de trabalho',
    },
    {
      textTitle: 'Features toggle',
    },
  ];

  public currentForm = 0;

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private featureToggleService: FeatureToggleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cloneAddFormFeatureToggle = this.addFormFeatureToggle;

    this.addFormFeatureToggle = this.formBuilder.group({
      _id: [this.addFormFeatureToggle?._id || ''],
      formProjectName: [
        this.addFormFeatureToggle?.projectName || '',
        Validators.required,
      ],
      formItensEnvironment: this.formBuilder.array(
        this.treatmentFormItensEnvironment.length
          ? this.treatmentFormItensEnvironment
          : this.environmentItens,
        [Validators.required]
      ),
      formItensFeaturesToggle: this.formBuilder.array(
        this.treatmentFormItensFeaturesToggle.length
          ? this.treatmentFormItensFeaturesToggle
          : [],
        [Validators.required]
      ),
    });
  }

  get formItensEnvironment(): any {
    return this.addFormFeatureToggle.get('formItensEnvironment') as FormArray;
  }

  get treatmentFormItensEnvironment() {
    let data: Array<string> = [];
    this.addFormFeatureToggle?.itensEnvironment.forEach((res: any) => {
      data.push(res[0]);
    });

    return data;
  }

  get formItensFeaturesToggle(): any {
    return this.addFormFeatureToggle.get(
      'formItensFeaturesToggle'
    ) as FormArray;
  }

  get treatmentFormItensFeaturesToggle() {
    let data: Array<[string, boolean]> = [];
    this.addFormFeatureToggle?.itensEnvironment[0][1].forEach((res: any) => {
      data.push(res[0]);
    });

    return data;
  }

  public hasInputValues(arr: any): boolean {
    if (new Set(arr).size !== arr.length) {
      return false;
    }
    return true;
  }

  public formatInputValue(
    inputValue: HTMLInputElement,
    index: number | null = null,
    formControl: any
  ) {
    inputValue.value = inputValue.value
      .replace(/[0-9]/g, '')
      .replace(/[^\w ]/g, '')
      .replace(' ', '');

    if (index !== null) {
      return formControl[index].setValue(inputValue.value);
    }

    return formControl.setValue(inputValue.value);
  }

  public addInputForm(formControl: any) {
    formControl.push(this.formBuilder.control('', [Validators.required]));
  }

  public removeInputForm(formControl: any, index: any) {
    formControl.value.splice(index, 1);
    formControl.controls.splice(index, 1);
    formControl.status = 'VALID';
    this.addFormFeatureToggle.status = 'VALID';
  }

  public submitInputForm() {
    if (this.addFormFeatureToggle.status === 'VALID') {
      let itensEnvironment: Array<[string, any[] | Array<[string, boolean]>]> =
        [];

      this.formItensEnvironment.value.map((envs: string, indexEnv: number) => {
        let cloneItensEnv: any = undefined;

        if (this.cloneAddFormFeatureToggle?.itensEnvironment) {
          cloneItensEnv =
            this.cloneAddFormFeatureToggle?.itensEnvironment[indexEnv];
        }

        itensEnvironment.push([envs, []]);

        this.formItensFeaturesToggle.value.forEach(
          (feature: string, index: number) => {
            if (cloneItensEnv) {
              if (cloneItensEnv[1] && cloneItensEnv[1][index]) {
                return itensEnvironment[indexEnv][1].push([
                  feature,
                  cloneItensEnv[1][index][1],
                ]);
              }
            }

            return itensEnvironment[indexEnv][1].push([feature, true]);
          }
        );
      });

      let featureToggle: IFeatureToggle = {
        projectName: this.addFormFeatureToggle.controls.formProjectName.value,
        itensEnvironment,
      };

      if (this.addFormFeatureToggle.controls._id.value) {
        featureToggle._id = this.addFormFeatureToggle.controls._id.value;
        this.featureToggleService.update(featureToggle).subscribe({
          next: (next) => {
            this.snackBar.open('Atualizado com sucesso', 'Fechar', {
              duration: 5000,
            });
            this.outputAddFormFeatureToggle.emit(next);
          },
        });
      } else {
        this.featureToggleService.create(featureToggle).subscribe({
          next: (next) => {
            this.snackBar.open('Criado com sucesso', 'Fechar', {
              duration: 5000,
            });
            this.router.navigate(['/read-feature/', next._id]);
          },
        });
      }
    }
  }
}
