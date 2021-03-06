import { Routes } from "@angular/router";
import { ItemsReportsResolver } from "src/app/authentication/login/services/items-reports.resolver";
import { CostReportComponent } from "./cost-report/cost-report.component";
import { CostReportResolver } from "./cost-report/services/cost-report.resolver";

export const CostRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reports',
                component: CostReportComponent,
                data: {
                    title: 'تقرير التكلفة',
                },                
                resolve: {
                    cost: CostReportResolver,
                    ItemsReports: ItemsReportsResolver,
                }                
            }
        ]
    }
]