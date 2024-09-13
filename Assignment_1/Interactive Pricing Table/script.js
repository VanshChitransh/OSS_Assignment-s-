// #include <iostream>
// #include <vector>
// using namespace std;
// int main() {
//     int n;
//     cin >> n;
//     vector<int> arr;
//     int cnt = 0;
//     int cnt1 = 0;
//     int cnt2 = 0;
//     if(n % 2 == 0){
//         while(n % 2 == 0){
//             arr.push_back(2);
//             n = n / 2;
//             cnt2 += 1;
//         }
//     }
//     for(int i = 3; i <= n; i = i + 2){
//         while(n % i == 0){
//             cnt += 1;
//             arr.push_back(i);
//             n = n / i;
//         }
//         cnt1 += 1;
//     }
//     int len = arr.size();
//     cout << "Length is " << len << endl;
//     for(int i = 0; i < len; i++){
//         cout << arr[i] << endl;
//     }
//     cout << "Count of for loop " << cnt1 << endl;
//     cout <<"Count of while loop "  << cnt << endl;
//     cout << "Total coutn " << cnt + cnt2 + cnt1 << endl;
//     return 0;
// }