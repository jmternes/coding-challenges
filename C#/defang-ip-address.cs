// Given a string IP Address, return a defanged version of that address, by replacing . with [.]
// Take in a user's input as ipAddress, then apply the DefangIP method to that argument to return the new string.

public class Solution {
    public string DefangIP(string address) {
        return address.Replace(".", "[.]");
    }
    
    public void Main()
    {
        string ipAddress = Console.ReadLine();
        string defangedIP = DefangIP(ipAddress);
        Console.WriteLine(defangedIP);
    }
}