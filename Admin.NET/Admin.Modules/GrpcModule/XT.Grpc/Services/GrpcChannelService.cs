

using Grpc.Core;
using Grpc.Net.Client;
using Grpc.Net.Client.Configuration;
using ProtoBuf.Grpc.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using XT.Common.Services;

namespace XT.Grpc.Services;
public class GrpcChannelService : IDisposable
{

    private GrpcChannel _grpcChannel;



    public bool IsConnect { get; set; }

    public GrpcChannelService()
    {

    }
    /// <summary>
    /// 创建Grpc通道服务
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="url">服务地址</param>
    /// <returns></returns>
    public async Task<T> CreateGrpcService<T>(string url = "") where T : class, IGrpcCodeService
    {
        try
        {
            if (_grpcChannel != null && !IsConnect)
            {
                await Close();
            }
            if (_grpcChannel == null || !IsConnect)
            {


                var defaultMethodConfig = new MethodConfig
                {
                    Names = { MethodName.Default },
                    RetryPolicy = new RetryPolicy
                    {
                        MaxAttempts = 3,
                        InitialBackoff = TimeSpan.FromSeconds(1),
                        MaxBackoff = TimeSpan.FromSeconds(5),
                        BackoffMultiplier = 1.5,
                        RetryableStatusCodes = { StatusCode.Unavailable }
                    }
                };

                _grpcChannel = GrpcChannel.ForAddress(url, new GrpcChannelOptions
                {
                    MaxReceiveMessageSize = null,
                    MaxSendMessageSize = null,
                    MaxRetryAttempts = int.MaxValue,
                    ServiceConfig = new ServiceConfig
                    {
                        MethodConfigs = { defaultMethodConfig }
                    },

                });

                IsConnect = true;

            }
            var service = _grpcChannel.CreateGrpcService<T>();


            return service;
        }
        catch (Exception ex)
        {

            IsConnect = false;
            return null;
        }

    }


    public async Task Close()
    {
        await _grpcChannel?.ShutdownAsync();

        IsConnect = false;
    }

    public async void Dispose()
    {
        if (_grpcChannel == null) return;
        await _grpcChannel?.ShutdownAsync();

        IsConnect = false;
    }
}

