// 

using Admin.Demo.Option;
using Furion;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;


namespace Admin.Demo;
[AppStartup(1)]
public class Startup : AppStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddConfigurableOptions<DemoOptions>();

     
        //services.AddRemoteRequest();    
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
    }
}
