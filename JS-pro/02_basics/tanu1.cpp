#include<iostream>
using namespace std;
int main(){
  int n=5;
  int position=3;
  int insertelement=8;
  int arr[10]={2,4,8,10,12,6,16};
  for(int i=0;i<=n;i++){
    cout<<arr[i];
  }
  cout<<endl;
  for(int i=n;i>position;i--){
    arr[i+1]=arr[i];
  }
cout<<endl;
arr[position]=insertelement;
n=n+1;
for(int i=0;i<n;i++ ){
  cout<<arr[i];
}
return 0;
}